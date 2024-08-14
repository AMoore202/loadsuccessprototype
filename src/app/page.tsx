"use client";

import { useState, useEffect, ChangeEvent } from 'react';
import styles from "./page.module.css";
import { 
  OutboundFlightIcon, 
  CalendarIcon,
  FinIcon,
  ClockIcon,
  BagIcon,
  PieceIcon,
  EmptyCartIcon,
} from "@/app/ui/Icons";
import LabelledTextWithIcon from "./ui/LabelledTextWithIcon";
import Card from "./ui/Card";
import LabelledText from "./ui/typography/LabelledText";
import Label from "./ui/typography/Label";
import Text from "./ui/typography/Text";
import Header from "./ui/Header"
import SuccessOverlay from "./ui/SuccessOverlay";
import ExceptionOverlay from "./ui/ExceptionOverlay";
import Scanbar from "./ui/scanbar/Scanbar";
import ScanbarButton from "./ui/scanbar/ScanbarButton";
import CustomSwitch from './ui/StyledSwitch';
import LastScan from './ui/LastScan';


export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showException, setShowException] = useState(false);
  const [lastScan, setLastScan] = useState('initial');
  const [successBeep, setSuccessBeep] = useState<HTMLAudioElement | null>(null);
  const [exceptionBeep, setExceptionBeep] = useState<HTMLAudioElement | null>(null);

  // useEffect(() => {
  //   const successAudioFile = new Audio("/sounds/SuccessBeep.wav");
  //   successAudioFile.preload = "auto";
  //   setSuccessBeep(successAudioFile);
  // }, []);

  // useEffect(() => {
  //   const exceptionAudioFile = new Audio("/sounds/sound_failure.mp3");
  //   exceptionAudioFile.preload = "auto";
  //   setExceptionBeep(exceptionAudioFile);
  // }, []);

  useEffect(() => {
    const successAudioFile = new Audio("/sounds/SuccessBeep.wav");
    successAudioFile.preload = "auto";

    const exceptionAudioFile = new Audio("/sounds/sound_failure.mp3");
    exceptionAudioFile.preload = "auto";

    setSuccessBeep(successAudioFile);
    setExceptionBeep(exceptionAudioFile);
  }, []);

  // const playSuccessBeep = () => {
  //   if (successBeep) {
  //     successBeep.currentTime = 0;
  //     successBeep.play();
  //   }
  // };

  // const playErrorBeep = () => {
  //   if (exceptionBeep) {
  //     exceptionBeep.currentTime = 0;
  //     exceptionBeep.play();
  //   } 
  // };

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
        setLastScan('exception');
      }, 500);
    }else{
      setTimeout(() => {
        setShowOverlay(true);
        playSound(successBeep);
        setLastScan('success');
      }, 500);
  
      setTimeout(() => {
        setShowOverlay(false);
      }, 1200);
    }
  }

  const closeOverlay = () => {
    setShowOverlay(false);
  }
  
  const handleExceptionToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowException(event.target.checked);
  };

  const overlay = showException ? <ExceptionOverlay backButton={closeOverlay} /> : <SuccessOverlay />;

  const outboundFlightIcon = <OutboundFlightIcon />;
  const calendarIcon = <CalendarIcon />;
  const finIcon = <FinIcon />;
  const clockIcon = <ClockIcon />;
  const bagIcon = <BagIcon />;
  const pieceIcon = <PieceIcon />;
  const emptyCartIcon = <EmptyCartIcon />;
  
  return (
    <main className={styles.main}>
      <div className={styles.android}>
        {showOverlay && overlay}
        <Header title="Load Flight" icon="hamburger" />
        <div className={styles.content}>
          <Card>
            <div className={styles.flightcardcontent}>
              <LabelledTextWithIcon 
                gridStyles = {{ gridColumn: '1 / 2', gridRow: '1 / 2' }}
                icon = {outboundFlightIcon}
              >
                <LabelledText gridStyles={{}}>
                  <Label text="FLIGHT" />
                  <Text text="ZZ1234" />
                </LabelledText>
              </LabelledTextWithIcon>
              <LabelledTextWithIcon
                gridStyles = {{ gridColumn: '2 / 2', gridRow: '1 / 2' }}
                icon = {calendarIcon}
              >
                <LabelledText gridStyles={{}}>
                  <Label text="DEP DATE" />
                  <Text text="23JUL" />
                </LabelledText>
              </LabelledTextWithIcon>
              <LabelledTextWithIcon
                gridStyles = {{ gridColumn: '1 / 2', gridRow: '2 / 2' }}
                icon = {finIcon}
              >
                <LabelledText gridStyles={{}}>
                  <Label text="FIN" />
                  <Text text="BRK7A" />
                </LabelledText>
              </LabelledTextWithIcon>
              <LabelledTextWithIcon
                gridStyles = {{ gridColumn: '2 / 2', gridRow: '2 / 2' }}
                icon = {clockIcon}
              >
                <LabelledText gridStyles={{}}>
                  <Label text="TTD" />
                  <Text text="7h 17m" />
                </LabelledText>
              </LabelledTextWithIcon>
            </div>
          </Card>
          <div className={styles.bagandcargocards}>
            <Card>
              <LabelledTextWithIcon gridStyles={{}} icon={bagIcon} largeText={true}>
                <LabelledText gridStyles={{}}>
                  <Label text ="OK / NOT OK TO LOAD" />
                  <div className={styles.toloadcounts}>
                    <Text text="5" size="large" color="success" />
                    <Text text="/" size="large"/>
                    <Text text="1" size="large" color="error"/>
                  </div>
                </LabelledText>
              </LabelledTextWithIcon>
            </Card>
            <Card>
              <LabelledTextWithIcon gridStyles={{}} icon={pieceIcon} largeText={true}>
                <LabelledText gridStyles={{}}>
                  <Label text="OK / NOT OK TO LOAD" />
                  <div className={styles.toloadcounts}>
                    <Text text="5" size="large" color="success" />
                    <Text text="/0" size="large"/>
                  </div>
                </LabelledText>
              </LabelledTextWithIcon>
            </Card>
          </div>
          <Card>
            <LabelledTextWithIcon gridStyles={{}} icon={emptyCartIcon} largeText={true}>
                <LabelledText gridStyles={{}}>
                  <Label text="ULD / Cart" />
                  <Text text="BINA" size="large" />
                </LabelledText>
            </LabelledTextWithIcon>
          </Card>
          <LastScan state={lastScan}/>
        </div>
      </div>
      <Scanbar>
        <CustomSwitch checked={showException} onChange={handleExceptionToggleChange}/>
        <ScanbarButton onClick={openOverlay} scanButtonLightException={showException} />
      </Scanbar>
    </main>
  );
}
