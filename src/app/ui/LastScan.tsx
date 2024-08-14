import styles from "@/app/ui/LastScan.module.css";
import LabelledTextWithIcon from "./LabelledTextWithIcon";
import LabelledText from "./typography/LabelledText";
import Label from "./typography/Label";
import Text from "./typography/Text";
import { CircleCheckIcon, CircleAlertIcon } from "@/app/ui/Icons";
import InstructionalText from "./InstructionalText";

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
                gridStyles={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}
                icon={circleCheckIcon}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="TAG NUMBER" />
                    <Text text="0105123456" color="success" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 3', gridRow: '2 / 3' }}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="PASSENGER NAME" />
                    <Text text="CLEMENT/ERNIE" color="success" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="TYPE" />
                    <Text text="CHECKED BAG" color="success" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledText gridStyles={{ gridColumn: '2 / 3', gridRow: '3 / 4' }}>
                <Label text="WEIGHT" />
                <Text text="STANDARD" color="success" fill={true} />
            </LabelledText>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 3', gridRow: '4 / 5' }}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="RESULT" />
                    <Text text="Successfully loaded: Load exception overridden" color="success" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon> 
        </div>
    const exceptionContent = 
        <div className={styles.labelledtextrows}>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}
                icon={circleAlertIcon}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="TAG NUMBER" />
                    <Text text="0105123456" color="error" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 3', gridRow: '2 / 3' }}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="PASSENGER NAME" />
                    <Text text="CLEMENT/ERNIE" color="error" size="large" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
                icon={null}
            >
                <LabelledText gridStyles={{}}>
                    <Label text="TYPE" />
                    <Text text="CHECKED BAG" color="error" fill={true} />
                </LabelledText>
            </LabelledTextWithIcon>
            <LabelledText gridStyles={{ gridColumn: '2 / 3', gridRow: '3 / 4' }}>
                <Label text="WEIGHT" />
                <Text text="STANDARD" color="error" fill={true} />
            </LabelledText>
            <LabelledTextWithIcon 
                gridStyles={{ gridColumn: '1 / 3', gridRow: '4 / 5' }}
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