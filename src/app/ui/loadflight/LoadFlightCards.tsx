import styles from "./LoadFlightCards.module.css";
import Card from "../android/Card";
import LabelledTextWithIcon from "../android/LabelledTextWithIcon";
import LabelledText from "../android/typography/LabelledText";
import Label from "../android/typography/Label";
import Text from "../android/typography/Text";
import { 
    OutboundFlightIcon,
    CalendarIcon,
    FinIcon,
    ClockIcon,
    BagIcon,
    PieceIcon,
    EmptyCartIcon
} from "../android/Icons";

export default function LoadFlightCards() {
    const outboundFlightIcon = <OutboundFlightIcon />;
    const calendarIcon = <CalendarIcon />;
    const finIcon = <FinIcon />;
    const clockIcon = <ClockIcon />;
    const bagIcon = <BagIcon />;
    const pieceIcon = <PieceIcon />;
    const emptyCartIcon = <EmptyCartIcon />;
    
    return(
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
        </div>
    );
}