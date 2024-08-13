"use client";

import { ChangeEvent } from 'react';
import styles from "./page.module.css";
import { useState } from "react";
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
import InstructionalText from "./ui/InstructionalText";
import LabelledText from "./ui/typography/LabelledText";
import Label from "./ui/typography/Label";
import Text from "./ui/typography/Text";
import Header from "./ui/Header"
import SuccessOverlay from "./ui/SuccessOverlay";
import ExceptionOverlay from "./ui/ExceptionOverlay";
import Scanbar from "./ui/scanbar/Scanbar";
import ScanbarButton from "./ui/scanbar/ScanbarButton";
import CustomSwitch from './ui/StyledSwitch';


export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showException, setShowException] = useState(false);

  const openOverlay = () => {
    if (showException) {
      setTimeout(() => {
        setShowOverlay(true);
      }, 500);
    }else{
      setTimeout(() => {
        setShowOverlay(true);
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
                <LabelledText>
                  <Label text="FLIGHT" />
                  <Text text="ZZ1234" />
                </LabelledText>
              </LabelledTextWithIcon>
              <LabelledTextWithIcon
                gridStyles = {{ gridColumn: '2 / 2', gridRow: '1 / 2' }}
                icon = {calendarIcon}
              >
                <LabelledText>
                  <Label text="DEP DATE" />
                  <Text text="23JUL" />
                </LabelledText>
              </LabelledTextWithIcon>
              <LabelledTextWithIcon
                gridStyles = {{ gridColumn: '1 / 2', gridRow: '2 / 2' }}
                icon = {finIcon}
              >
                <LabelledText>
                  <Label text="FIN" />
                  <Text text="BRK7A" />
                </LabelledText>
              </LabelledTextWithIcon>
              <LabelledTextWithIcon
                gridStyles = {{ gridColumn: '2 / 2', gridRow: '2 / 2' }}
                icon = {clockIcon}
              >
                <LabelledText>
                  <Label text="TTD" />
                  <Text text="7h 17m" />
                </LabelledText>
              </LabelledTextWithIcon>
            </div>
          </Card>
          <div className={styles.bagandcargocards}>
            <Card>
              <LabelledTextWithIcon gridStyles={{}} icon = {bagIcon}>
                <LabelledText>
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
              <LabelledTextWithIcon gridStyles={{}} icon = {pieceIcon}>
                <LabelledText>
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
            <LabelledTextWithIcon gridStyles={{}} icon = {emptyCartIcon}>
                <LabelledText>
                  <Label text="ULD / Cart" />
                  <Text text="BINA" size="large" />
                </LabelledText>
            </LabelledTextWithIcon>
          </Card>
          <InstructionalText
            text = "Scan a tag or tap on the button below to scan it with the camera. Swipe the Flight or ULD/Cart cards to change the flight or ULD/Cart."
          />
        </div>
      </div>
      <Scanbar>
        <CustomSwitch checked={showException} onChange={handleExceptionToggleChange}/>
        <ScanbarButton onClick={openOverlay} scanButtonLightException={showException} />
      </Scanbar>
    </main>
  );
}
