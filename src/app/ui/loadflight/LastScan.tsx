import styles from "./LastScan.module.css";
import LabelledTextWithIcon from "../android/LabelledTextWithIcon";
import LabelledText from "../android/typography/LabelledText";
import Label from "../android/typography/Label";
import Text from "../android/typography/Text";
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
            <LabelledTextWithIcon 
                gridStyles={{}}
                icon={circleCheckIcon}
                largeText={true}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="TAG NUMBER" />
                    <Text text="0105123456" color="success" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledTextWithIcon 
                gridStyles={{}}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="PASSENGER NAME" />
                    <Text text="CLEMENT/ERNIE" color="success" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <div className={styles.baginfo}>
                <LabelledTextWithIcon 
                    gridStyles={{width: '55%'}}
                    icon={null}
                >
                    <LabelledText gridStyles={{}}>
                        <Label text="TYPE" />
                        <Text text="CHECKED BAG" color="success" fill={true} />
                    </LabelledText>
                </LabelledTextWithIcon>
                <LabelledText gridStyles={{width: '45%'}}>
                    <Label text="WEIGHT" />
                    <Text text="STANDARD" color="success" fill={true} />
                </LabelledText>
            </div>
            <LabelledTextWithIcon 
                gridStyles={{}}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="RESULT" />
                    <Text text="Successfully loaded" color="success" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon> 
        </div>
    const exceptionContent = 
        <div className={styles.labelledtextrows}>
            <LabelledTextWithIcon 
                gridStyles={{}}
                icon={circleAlertIcon}
                largeText={true}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="TAG NUMBER" />
                    <Text text="0105123456" color="error" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledTextWithIcon 
                gridStyles={{}}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="PASSENGER NAME" />
                    <Text text="CLEMENT/ERNIE" color="error" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <div className={styles.baginfo}>
                <LabelledTextWithIcon 
                    gridStyles={{width: '55%'}}
                    icon={null}
                >
                    <LabelledText gridStyles={{}}>
                        <Label text="TYPE" />
                        <Text text="CHECKED BAG" color="error" fill={true} />
                    </LabelledText>
                </LabelledTextWithIcon>
                <LabelledText gridStyles={{width: '45%'}}>
                    <Label text="WEIGHT" />
                    <Text text="STANDARD" color="error" fill={true} />
                </LabelledText>
            </div>
            <LabelledTextWithIcon 
                gridStyles={{}}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="RESULT" />
                    <Text text="Bag not loaded" color="error" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon> 
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