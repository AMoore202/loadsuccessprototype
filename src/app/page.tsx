"use client";

import { useState, useEffect, ChangeEvent } from "react";
import styles from "./page.module.css";
import Header from "./ui/android/Header";
import SuccessOverlay from "./ui/loadflight/SuccessOverlay";
import ExceptionOverlay from "./ui/loadflight/ExceptionOverlay";
import Scanbar from "./ui/scanbar/Scanbar";
import ScanbarButton from "./ui/scanbar/ScanbarButton";
import CustomSwitch from "./ui/scanbar/StyledSwitch";
import LastScan from "./ui/loadflight/LastScan";
import LoadFlightCards from "./ui/loadflight/LoadFlightCards";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showException, setShowException] = useState(false);
  const [lastScan, setLastScan] = useState("initial");
  const [successBeep, setSuccessBeep] = useState<HTMLAudioElement | null>(null);
  const [exceptionBeep, setExceptionBeep] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    const successAudioFile = new Audio("/sounds/SuccessBeep.wav");
    successAudioFile.preload = "auto";

    const exceptionAudioFile = new Audio("/sounds/sound_failure.mp3");
    exceptionAudioFile.preload = "auto";

    setSuccessBeep(successAudioFile);
    setExceptionBeep(exceptionAudioFile);
  }, []);

  const playSound = (sound: HTMLAudioElement | null) => {
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  const openOverlay = () => {
    if (showException) {
      setTimeout(() => {
        setShowOverlay(true);
        playSound(exceptionBeep);
        setLastScan("exception");
      }, 500);
    } else {
      setTimeout(() => {
        setShowOverlay(true);
        playSound(successBeep);
        setLastScan("success");
      }, 500);

      setTimeout(() => {
        setShowOverlay(false);
      }, 1200);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const handleExceptionToggleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setShowException(event.target.checked);
  };

  const overlay = showException ? (
    <ExceptionOverlay
      backButton={closeOverlay}
      exception="wrongContainerCategory"
    />
  ) : (
    <SuccessOverlay />
  );

  return (
    <main className={styles.main}>
      <div className={styles.android}>
        {showOverlay && overlay}
        <Header title="Load Flight" icon="hamburger" />
        <div className={styles.content}>
          <LoadFlightCards />
          <LastScan state={lastScan} />
        </div>
      </div>
      <Scanbar>
        <CustomSwitch
          checked={showException}
          onChange={handleExceptionToggleChange}
        />
        <ScanbarButton
          onClick={openOverlay}
          scanButtonLightException={showException}
        />
      </Scanbar>
    </main>
  );
}
