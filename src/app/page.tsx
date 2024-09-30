"use client";

import { useState, useEffect, ChangeEvent } from "react";
import styles from "./page.module.css";
import Header from "./ui/android/Header";
import SuccessOverlay from "./ui/loadflight/SuccessOverlay";
import ExceptionOverlay from "./ui/loadflight/ExceptionOverlay";
import Scanbar from "./ui/scanbar/Scanbar";
import ScanbarButton from "./ui/scanbar/ScanbarButton";
import CustomSwitch from "./ui/scanbar/StyledSwitch";
import { OpenConfigButton } from "./ui/scanbar/ConfigButtons";
import ConfigOverlay from "./ui/scanbar/ConfigOverlay";
import LastScan from "./ui/loadflight/LastScan";
import LoadFlightCards from "./ui/loadflight/LoadFlightCards";
import { SelectChangeEvent } from "@mui/material/Select";

type ExceptionType =
  | "wrongFlight"
  | "wrongContainerCategory"
  | "wrongContainerDestination"
  | "containerFullCount"
  | "containerFullWeight"
  | "containerClosed"
  | "flightCancelled"
  | "flightClosed"
  | "inactive"
  | "standby"
  | "notAuthorized"
  | "screeningRequired"
  | "stoppedBag";

export default function Home() {
  const [isException, setIsException] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [showExceptionOverlay, setShowExceptionOverlay] = useState(false);
  const [lastScan, setLastScan] = useState("initial");
  const [successBeep, setSuccessBeep] = useState<HTMLAudioElement | null>(null);
  const [exceptionBeep, setExceptionBeep] = useState<HTMLAudioElement | null>(
    null
  );
  const [showConfigOverlay, setShowConfigOverlay] = useState(false);
  const [selectedException, setSelectedException] =
    useState<ExceptionType>("wrongFlight");
  const [canOverrideException, setCanOverrideException] = useState(true);
  const [canOverrideExceptionShown, setCanOverrideExceptionShown] =
    useState(true);

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

  function openSuccessOverlay({ isOverride }: { isOverride: boolean }) {
    setTimeout(() => {
      setShowSuccessOverlay(true);
      setShowExceptionOverlay(false);
      playSound(successBeep);
      if (isOverride) {
        setLastScan("successOverridden");
      } else {
        setLastScan("success");
      }
    }, 500);

    setTimeout(() => {
      setShowSuccessOverlay(false);
    }, 1200);
  }

  const openExceptionOverlay = () => {
    setTimeout(() => {
      setShowExceptionOverlay(true);
      playSound(exceptionBeep);
      setLastScan("exception");
    }, 500);
  };

  const closeExceptionOverlay = () => {
    setShowExceptionOverlay(false);
  };

  const openOverlay = () => {
    setShowConfigOverlay(false);
    if (isException) {
      openExceptionOverlay();
    } else {
      openSuccessOverlay({ isOverride: false });
    }
  };

  const handleExceptionToggleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setIsException(event.target.checked);
  };

  const toggleConfigOverlay = () => {
    setShowConfigOverlay(!showConfigOverlay);
  };

  const handleExceptionSelectionChange = (event: SelectChangeEvent<string>) => {
    setSelectedException(event.target.value as ExceptionType);
    if (
      event.target.value === "flightCancelled" ||
      event.target.value === "containerClosed" ||
      event.target.value === "flightClosed" ||
      event.target.value === "standby" ||
      event.target.value === "notAuthorized" ||
      event.target.value === "stoppedBag" ||
      event.target.value === "screeningRequired"
    ) {
      setCanOverrideExceptionShown(false);
      setCanOverrideException(false);
    } else {
      setCanOverrideExceptionShown(true);
      setCanOverrideException(true);
    }
  };

  const handleCanOverrideException = (event: ChangeEvent<HTMLInputElement>) => {
    setCanOverrideException(event.target.checked);
  };

  return (
    <main className={styles.main}>
      <div className={styles.android}>
        {showConfigOverlay && (
          <ConfigOverlay
            closeButton={toggleConfigOverlay}
            exceptionInputSelection={selectedException}
            exceptionInputChange={handleExceptionSelectionChange}
            canOverrideSelection={canOverrideException}
            handleOverrideChange={handleCanOverrideException}
            canOverrideShown={canOverrideExceptionShown}
          />
        )}
        {showSuccessOverlay && <SuccessOverlay />}
        {showExceptionOverlay && (
          <ExceptionOverlay
            backButton={closeExceptionOverlay}
            overrideButton={() => openSuccessOverlay({ isOverride: true })}
            exception={selectedException}
            showOverride={canOverrideException}
          />
        )}

        <Header title="Load Flight" icon="hamburger" />
        <div className={styles.content}>
          <LoadFlightCards />
          <LastScan state={lastScan} />
        </div>
      </div>
      <Scanbar>
        <OpenConfigButton onClick={toggleConfigOverlay} />
        <CustomSwitch
          checked={isException}
          onChange={handleExceptionToggleChange}
        />
        <ScanbarButton
          onClick={openOverlay}
          scanButtonLightException={isException}
        />
      </Scanbar>
    </main>
  );
}
