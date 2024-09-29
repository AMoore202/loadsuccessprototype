import styles from "./ExceptionOverlay.module.css";
import Header from "../android/Header";
import { Label, Text } from "../android/Typography";
import LabelledText from "../android/LabelledText";
import NavBar from "../android/NavBar";
import Button from "../android/Button";

function AlertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.06649 19.3828C2.38675 26.503 -0.0722886 34.8529 0.00161833 43.373C0.0516774 54.7276 4.61014 65.5975 12.6741 73.5914C20.738 81.5854 31.647 86.0488 43.0016 86C51.522 85.9997 59.8504 83.4681 66.9296 78.7265C74.0087 73.9849 79.5196 67.247 82.763 59.368C86.0063 51.4891 86.8356 42.8243 85.146 34.4731C83.4564 26.1219 79.324 18.4608 73.2729 12.4623C67.2219 6.46377 59.5252 2.39808 51.1596 0.781283C42.794 -0.835519 34.1367 0.069405 26.2862 3.38124C18.4358 6.69307 11.7462 12.2626 7.06649 19.3828ZM44.9039 48.3905C44.9663 48.2968 44.9975 48.1875 44.9975 48.0626L45.3956 25.7241C45.3956 25.5367 45.3644 25.3806 45.3019 25.2557C45.2395 25.1152 45.1224 24.9982 44.9507 24.9045C44.7946 24.8108 44.576 24.7406 44.295 24.6938C44.0297 24.6469 43.6862 24.6235 43.2648 24.6235C42.8277 24.6235 42.4686 24.6469 42.1876 24.6938C41.9223 24.725 41.7037 24.7874 41.532 24.8811C41.3759 24.9748 41.2666 25.0918 41.2042 25.2323C41.1417 25.3728 41.1183 25.5367 41.1339 25.7241L41.532 48.0626C41.532 48.1875 41.5554 48.2968 41.6022 48.3905C41.6647 48.4841 41.7661 48.5622 41.9066 48.6246C42.0471 48.6871 42.2267 48.7339 42.4452 48.7651C42.6637 48.7963 42.9369 48.8119 43.2648 48.8119C43.5926 48.8119 43.8658 48.7963 44.0843 48.7651C44.3029 48.7339 44.4824 48.6871 44.6229 48.6246C44.7634 48.5622 44.857 48.4841 44.9039 48.3905ZM45.6063 55.6493C45.6844 55.3059 45.7234 54.8766 45.7234 54.3615C45.7234 53.8463 45.6844 53.417 45.6063 53.0736C45.5439 52.7146 45.4112 52.4414 45.2083 52.254C45.0209 52.0511 44.7712 51.9106 44.459 51.8326C44.1467 51.7389 43.7487 51.6921 43.2648 51.6921C42.7808 51.6921 42.375 51.7389 42.0471 51.8326C41.7349 51.9106 41.4852 52.0511 41.2978 52.254C41.1105 52.4414 40.9778 52.7146 40.8998 53.0736C40.8373 53.417 40.8061 53.8463 40.8061 54.3615C40.8061 54.8766 40.8373 55.3059 40.8998 55.6493C40.9778 55.9771 41.1105 56.2503 41.2978 56.4689C41.4852 56.6718 41.7349 56.8123 42.0471 56.8904C42.375 56.984 42.7808 57.0309 43.2648 57.0309C43.7487 57.0309 44.1467 56.984 44.459 56.8904C44.7712 56.8123 45.0209 56.6718 45.2083 56.4689C45.4112 56.2503 45.5439 55.9771 45.6063 55.6493Z"
        fill="white"
      />
    </svg>
  );
}

interface ActionContentProps {
  type?: "scheduledFlight" | "instructions" | "recommendedContainer";
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
  const recommendedContainerContent = (
    <div className={styles.actionsection}>
      <Text text="Recommended" size="large" color="white" />
      <Text text="AKE00000R7, AKE11111R7" color="white" />
    </div>
  );
  const actionContent =
    type === "instructions"
      ? instructionsContent
      : type === "recommendedContainer"
      ? recommendedContainerContent
      : scheduledFlightContent;

  return actionContent;
}

interface ExceptionOverlayProps {
  backButton: React.MouseEventHandler<HTMLButtonElement>;
  overrideButton: React.MouseEventHandler<HTMLButtonElement>;
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
    | "stoppedBag";
}

export default function ExceptionOverlay({
  backButton,
  overrideButton,
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
      : "WRONG FLIGHT";

  const wrongContainerCategoryCard = (
    <div className={styles.card}>
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
    <div className={styles.card}>
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
    <div className={styles.card}>
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
    <div className={styles.card}>
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
    <div className={styles.card}>
      <Text text="Bag isn't scheduled for ZZ1234" color="white" fill={true} />
    </div>
  );
  const flightCancelledCard = (
    <div className={styles.card}>
      <Text text="Flight ZZ1234 is cancelled" color="white" fill={true} />
    </div>
  );
  const flightClosedCard = (
    <div className={styles.card}>
      <Text text="Flight ZZ1234 is closed" color="white" fill={true} />
    </div>
  );
  const stoppedBagCard = (
    <div className={styles.card}>
      <LabelledText gridStyles={{}} showIcon={false} icon={null}>
        <Label text="REASON" color="white" />
        <Text text="Medical Recall" color="white" />
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
    ) : (
      <ActionContent type="scheduledFlight" />
    );

  return (
    <div className={styles.overlay}>
      <Header
        title="Load Exception"
        icon="close"
        showLogo={false}
        backButton={backButton}
      />
      <div className={styles.content}>
        <div className={styles.topcontent}>
          <AlertIcon />
          <p className={styles.exceptiontext}>{exceptionText}</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <LabelledText gridStyles={{}} showIcon={false} icon={null}>
              <Label text="TAG NUMBER" color="white" />
              <Text text="0105123456" color="white" />
            </LabelledText>
            <LabelledText gridStyles={{}} showIcon={false} icon={null}>
              <Label text="ULD/CART" color="white" />
              <Text text="AKE12345R7" color="white" />
            </LabelledText>
          </div>
          {exceptionSpecificCard}
        </div>
        {actionContent}
      </div>
      <NavBar>
        <Button text="BACK" onClick={backButton} />
        <Button text="OVERRIDE" onClick={overrideButton} />
      </NavBar>
    </div>
  );
}
