import styles from "./ExceptionOverlay.module.css";
import Header from "../android/Header";
import { Label, Text } from "../android/Typography";
import LabelledText from "../android/LabelledText";
import NavBar from "../android/NavBar";
import Button from "../android/Button";
import { LargeAlertIcon, LargeTriangleAlertIcon } from "../android/Icons";
import clsx from "clsx";

interface ActionContentProps {
  type?:
    | "scheduledFlight"
    | "instructions"
    | "alertInstructions"
    | "recommendedContainer";
}

function ActionContent({ type = "scheduledFlight" }: ActionContentProps) {
  const scheduledFlightContent = (
    <div className={styles.actionsection}>
      <Text text="Scheduled Flight" size="large" color="white" />
      <div className={styles.flightdetails}>
        <LabelledText gridStyles={{}} showIcon={false} icon={null}>
          <Label text="FLIGHT" color="white" />
          <Text text="ZZ0600" color="white" />
        </LabelledText>
        <LabelledText gridStyles={{}} showIcon={false} icon={null}>
          <Label text="DEPARTURE" color="white" />
          <Text text="25MAY 16:00L" color="white" />
        </LabelledText>
      </div>
    </div>
  );
  const instructionsContent = (
    <div className={styles.actionsection}>
      <Text text="Instructions" size="large" color="white" />
      <Text text="{airline provided instruction}" color="white" />
    </div>
  );
  const alertInstructionsContent = (
    <div className={styles.actionsection}>
      <Text text="Instructions" size="large" color="black" />
      <Text text="{airline provided instruction}" color="black" />
    </div>
  );
  const recommendedContainerContent = (
    <div className={styles.actionsection}>
      <Text text="Recommended" size="large" color="white" />
      <Text text="AKE00000R7, AKE11111R7" color="white" />
    </div>
  );
  const actionContent =
    type === "instructions"
      ? instructionsContent
      : type === "alertInstructions"
      ? alertInstructionsContent
      : type === "recommendedContainer"
      ? recommendedContainerContent
      : type === "scheduledFlight"
      ? scheduledFlightContent
      : null;

  return actionContent;
}

interface ExceptionOverlayProps {
  backButton: React.MouseEventHandler<HTMLButtonElement>;
  overrideButton: React.MouseEventHandler<HTMLButtonElement>;
  showOverride?: boolean;
  exception?:
    | "wrongContainerCategory"
    | "wrongContainerDestination"
    | "containerFullCount"
    | "containerFullWeight"
    | "containerClosed"
    | "wrongFlight"
    | "flightCancelled"
    | "flightClosed"
    | "inactive"
    | "standby"
    | "notAuthorized"
    | "screeningRequired"
    | "stoppedBag"
    | "flaggedBag"
    | "hazmat";
}

export default function ExceptionOverlay({
  backButton,
  overrideButton,
  showOverride = true,
  exception = "wrongFlight",
}: ExceptionOverlayProps) {
  const exceptionText =
    exception === "wrongContainerCategory" ||
    exception === "wrongContainerDestination"
      ? "WRONG ULD/CART"
      : exception === "containerFullCount" ||
        exception === "containerFullWeight"
      ? "ULD/CART FULL"
      : exception === "containerClosed"
      ? "ULD/CART CLOSED"
      : exception === "flightCancelled"
      ? "FLIGHT CANCELLED"
      : exception === "flightClosed"
      ? "FLIGHT CLOSED"
      : exception === "inactive"
      ? "INACTIVE"
      : exception === "standby"
      ? "STANDBY"
      : exception === "notAuthorized"
      ? "NOT AUTHORIZED"
      : exception === "screeningRequired"
      ? "SCREENING REQUIRED"
      : exception === "stoppedBag"
      ? "STOPPED BAG"
      : exception === "flaggedBag"
      ? "FLAGGED BAG"
      : exception === "hazmat"
      ? "HAZMAT"
      : "WRONG FLIGHT";

  const wrongContainerCategoryCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <div className={styles.cardcol}>
        <Text
          text="Bag is not compatible with ULD/Cart category"
          color="white"
        />
        <div className={styles.cardrow}>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="BAG CATEGORY" color="white" />
            <Text text="BC" color="white" />
          </LabelledText>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="ULD/CART CATEGORY" color="white" />
            <Text text="BC" color="white" />
          </LabelledText>
        </div>
      </div>
    </div>
  );
  const wrongContainerDestinationCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <div className={styles.cardcol}>
        <Text text="Bag is not compatible with ULD destination" color="white" />
        <div className={styles.cardrow}>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="BAG DESTINATION" color="white" />
            <Text text="DEN" color="white" />
          </LabelledText>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="ULD/Cart Destination" color="white" />
            <Text text="DFW" color="white" />
          </LabelledText>
        </div>
      </div>
    </div>
  );
  const containerFullCountCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <div className={styles.cardcol}>
        <Text text="ULD/Cart has a full count" color="white" />
        <div className={styles.cardrow}>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="BAG COUNT" color="white" />
            <Text text="1" color="white" />
          </LabelledText>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="LOADED COUNT" color="white" />
            <Text text="5/5" color="white" />
          </LabelledText>
        </div>
      </div>
    </div>
  );
  const containerFullWeightCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <div className={styles.cardcol}>
        <Text text="Bag is too heavy to fit in ULD/Cart" color="white" />
        <div className={styles.cardrow}>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="BAG WEIGHT (LBS)" color="white" />
            <Text text="100" color="white" />
          </LabelledText>
          <LabelledText gridStyles={{}} showIcon={false} icon={null}>
            <Label text="LOADED WEIGHT (LBS)" color="white" />
            <Text text="200/250" color="white" />
          </LabelledText>
        </div>
      </div>
    </div>
  );
  const wrongFlightCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <Text text="Bag isn't scheduled for ZZ1234" color="white" fill={true} />
    </div>
  );
  const flightCancelledCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <Text text="Flight ZZ1234 is cancelled" color="white" fill={true} />
    </div>
  );
  const flightClosedCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <Text text="Flight ZZ1234 is closed" color="white" fill={true} />
    </div>
  );
  const stoppedBagCard = (
    <div className={`${styles.card} ${styles.cardException}`}>
      <LabelledText gridStyles={{}} showIcon={false} icon={null}>
        <Label text="REASON" color="white" />
        <Text text="Medical Recall" color="white" />
      </LabelledText>
    </div>
  );
  const flaggedBagCard = (
    <div className={`${styles.card} ${styles.cardAlert}`}>
      <LabelledText gridStyles={{}} showIcon={false} icon={null}>
        <Label text="REASON" color="black" />
        <Text text="Sequence" color="black" />
      </LabelledText>
    </div>
  );

  const exceptionSpecificCard =
    exception === "wrongContainerCategory"
      ? wrongContainerCategoryCard
      : exception === "wrongContainerDestination"
      ? wrongContainerDestinationCard
      : exception === "containerFullCount"
      ? containerFullCountCard
      : exception === "containerFullWeight"
      ? containerFullWeightCard
      : exception === "wrongFlight"
      ? wrongFlightCard
      : exception === "flightCancelled"
      ? flightCancelledCard
      : exception === "flightClosed"
      ? flightClosedCard
      : exception === "stoppedBag"
      ? stoppedBagCard
      : exception === "flaggedBag"
      ? flaggedBagCard
      : null;

  const actionContent =
    exception === "wrongContainerCategory" ||
    exception === "wrongContainerDestination" ||
    exception === "containerFullCount" ||
    exception === "containerFullWeight" ||
    exception === "containerClosed" ? (
      <ActionContent type="recommendedContainer" />
    ) : exception === "inactive" ||
      exception === "standby" ||
      exception === "notAuthorized" ||
      exception === "screeningRequired" ||
      exception === "stoppedBag" ? (
      <ActionContent type="instructions" />
    ) : exception === "wrongFlight" ? (
      <ActionContent type="scheduledFlight" />
    ) : exception === "flaggedBag" ? (
      <ActionContent type="alertInstructions" />
    ) : null;

  const isException =
    exception === "flaggedBag" || exception === "hazmat" ? false : true;

  return (
    <div className={styles.overlay}>
      <Header
        title="Load Exception"
        icon="close"
        showLogo={false}
        backButton={backButton}
      />
      <div
        className={clsx(styles.content, {
          [styles["contentException"]]: isException === true,
          [styles["contentAlert"]]: isException === false,
        })}
      >
        <div className={styles.topcontent}>
          {isException && <LargeAlertIcon />}
          {!isException && <LargeTriangleAlertIcon />}
          <p
            className={clsx(styles.exceptiontext, {
              [styles["exceptiontextException"]]: isException === true,
              [styles["exceptiontextAlert"]]: isException === false,
            })}
          >
            {exceptionText}
          </p>
        </div>
        <div
          className={clsx(styles.cards, {
            [styles["cardsException"]]: isException === true,
            [styles["cardsAlert"]]: isException === false,
          })}
        >
          {isException && (
            <div className={`${styles.card} ${styles.cardException}`}>
              <LabelledText gridStyles={{}} showIcon={false} icon={null}>
                <Label text="TAG NUMBER" color="white" />
                <Text text="0105123456" color="white" />
              </LabelledText>
              <LabelledText gridStyles={{}} showIcon={false} icon={null}>
                <Label text="ULD/CART" color="white" />
                <Text text="AKE12345R7" color="white" />
              </LabelledText>
            </div>
          )}
          {!isException && (
            <div className={`${styles.card} ${styles.cardAlert}`}>
              <LabelledText gridStyles={{}} showIcon={false} icon={null}>
                <Label text="TAG NUMBER" color="black" />
                <Text text="0105123456" color="black" />
              </LabelledText>
              <LabelledText gridStyles={{}} showIcon={false} icon={null}>
                <Label text="ULD/CART" color="black" />
                <Text text="AKE12345R7" color="black" />
              </LabelledText>
            </div>
          )}
          {exceptionSpecificCard}
        </div>
        {actionContent}
      </div>
      <NavBar>
        <Button text="BACK" onClick={backButton} />
        {showOverride && <Button text="OVERRIDE" onClick={overrideButton} />}
      </NavBar>
    </div>
  );
}
