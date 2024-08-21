import styles from "./LastScan.module.css";
import LabelledText from "../android/LabelledText";
import { Label, Text } from "../android/Typography";
import { CircleCheckIcon, CircleAlertIcon } from "../android/Icons";
import InstructionalText from "../android/InstructionalText";

interface LastScanProps {
    state: string;
}

export default function LastScan({state='initial'}: LastScanProps) {
    const circleCheckIcon = <CircleCheckIcon />;
    const circleAlertIcon = <CircleAlertIcon />;

    const initialContent = 
        <InstructionalText
            text = "Scan a tag or tap on the button below to scan it with the camera. Swipe the Flight or ULD/Cart cards to change the flight or ULD/Cart."
        />;
    const successContent = 
        <div className={styles.labelledtextrows}>
            <LabelledText 
                gridStyles={{}}
                icon={circleCheckIcon}
                largeText={true}
            >
                <Label text="TAG NUMBER" />
                <Text text="0105123456" color="success" size="large" fill={true} />
            </LabelledText>
            <LabelledText 
                gridStyles={{}}
                icon={null}
            >
                <Label text="PASSENGER NAME" />
                <Text text="CLEMENT/ERNIE" color="success" size="large" fill={true} />
            </LabelledText>
            <div className={styles.baginfo}>
                <LabelledText 
                    gridStyles={{width: '55%'}}
                    icon={null}
                >
                    <Label text="TYPE" />
                    <Text text="CHECKED BAG" color="success" fill={true} />
                </LabelledText>
                <LabelledText gridStyles={{width: '45%'}} showIcon={false} icon={null}>
                    <Label text="WEIGHT" />
                    <Text text="STANDARD" color="success" fill={true} />
                </LabelledText>
            </div>
            <LabelledText 
                gridStyles={{}}
                icon={null}
            >
                <Label text="RESULT" />
                <Text text="Successfully loaded" color="success" fill={true} />
            </LabelledText> 
        </div>
    const exceptionContent = 
        <div className={styles.labelledtextrows}>
            <LabelledText 
                gridStyles={{}}
                icon={circleAlertIcon}
                largeText={true}
            >
                <Label text="TAG NUMBER" />
                <Text text="0105123456" color="error" size="large" fill={true} />
            </LabelledText>
            <LabelledText 
                gridStyles={{}}
                icon={null}
            >
                <Label text="PASSENGER NAME" />
                <Text text="CLEMENT/ERNIE" color="error" size="large" fill={true} />
            </LabelledText>
            <div className={styles.baginfo}>
                <LabelledText 
                    gridStyles={{width: '55%'}}
                    icon={null}
                >
                    <Label text="TYPE" />
                    <Text text="CHECKED BAG" color="error" fill={true} />
                </LabelledText>
                <LabelledText gridStyles={{width: '45%'}} showIcon={false} icon={null}>
                    <Label text="WEIGHT" />
                    <Text text="STANDARD" color="error" fill={true} />
                </LabelledText>
            </div>
            <LabelledText 
                gridStyles={{}}
                icon={null}
            >
                <Label text="RESULT" />
                <Text text="Bag not loaded" color="error" fill={true} />
            </LabelledText> 
        </div>

    const lastScanContent = state === 'success'
        ? successContent
        : state === 'exception'
        ? exceptionContent
        : initialContent;
        
    return(
        lastScanContent
    );
}