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
  | "stoppedBag"
  | "flaggedBag"
  | "hazmat";

type SoundType = "old" | "new1" | "new2";

export default function Home() {
  const [isException, setIsException] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [showExceptionOverlay, setShowExceptionOverlay] = useState(false);
  const [lastScan, setLastScan] = useState("initial");
  const [successBeepOld, setSuccessBeepOld] = useState<HTMLAudioElement | null>(
    null
  );
  const [successBeepNew1, setSuccessBeepNew1] =
    useState<HTMLAudioElement | null>(null);
  const [successBeepNew2, setSuccessBeepNew2] =
    useState<HTMLAudioElement | null>(null);
  const [successSound, setSuccessSound] = useState("old");
  const [exceptionBeep, setExceptionBeep] = useState<HTMLAudioElement | null>(
    null
  );
  const [showConfigOverlay, setShowConfigOverlay] = useState(false);
  const [selectedException, setSelectedException] =
    useState<ExceptionType>("wrongFlight");
  const [canOverrideException, setCanOverrideException] = useState(false);
  const [canOverrideExceptionShown, setCanOverrideExceptionShown] =
    useState(false);

  useEffect(() => {
    const successAudioFileOld = new Audio("/sounds/SuccessBeep_Old.mp3");
    successAudioFileOld.preload = "auto";

    const successAudioFileNew1 = new Audio("/sounds/SuccessBeep_New1.wav");
    successAudioFileNew1.preload = "auto";

    const successAudioFileNew2 = new Audio("/sounds/SuccessBeep_New2.wav");
    successAudioFileNew2.preload = "auto";

    const exceptionAudioFile = new Audio("/sounds/sound_failure.mp3");
    exceptionAudioFile.preload = "auto";

    setSuccessBeepOld(successAudioFileOld);
    setSuccessBeepNew1(successAudioFileNew1);
    setSuccessBeepNew2(successAudioFileNew2);
    setExceptionBeep(exceptionAudioFile);
  }, []);

  // const playSound = (sound: HTMLAudioElement | null) => {
  //   if (sound) {
  //     // sound.currentTime = 0;
  //     // sound.play();
  //     const soundClone = sound.cloneNode() as HTMLAudioElement;
  //     soundClone.play();
  //   }
  // };

  const playSoundThrottled = (sound: HTMLAudioElement | null) => {
    if (sound) {
      if (!sound.paused) {
        return; // Ignore if sound is already playing
      }
      const soundClone = sound.cloneNode() as HTMLAudioElement;
      soundClone.play();
    }
  };

  const successSoundFile =
    successSound === "old"
      ? successBeepOld
      : successSound === "new1"
      ? successBeepNew1
      : successSound === "new2"
      ? successBeepNew2
      : null;

  function openSuccessOverlay({ isOverride }: { isOverride: boolean }) {
    setTimeout(() => {
      setShowSuccessOverlay(true);
      setShowExceptionOverlay(false);
      playSoundThrottled(successSoundFile);
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
      playSoundThrottled(exceptionBeep);
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
    } else if (
      event.target.value === "flaggedBag" ||
      event.target.value === "hazmat"
    ) {
      setCanOverrideExceptionShown(false);
      setCanOverrideException(true);
    } else {
      setCanOverrideExceptionShown(true);
      setCanOverrideException(true);
    }
  };

  const handleCanOverrideException = (event: ChangeEvent<HTMLInputElement>) => {
    setCanOverrideException(event.target.checked);
  };

  const handleSuccessSoundChange = (event: SelectChangeEvent<string>) => {
    setSuccessSound(event.target.value as SoundType);
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
            successSoundInputSelection={successSound}
            successSoundInputChange={handleSuccessSoundChange}
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
