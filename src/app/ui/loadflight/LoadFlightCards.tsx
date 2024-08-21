import styles from "./LoadFlightCards.module.css";
import Card from "../android/Card";
import LabelledText from "../android/LabelledText";
import { Label, Text } from "../android/Typography";
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
                <LabelledText 
                    gridStyles = {{ gridColumn: '1 / 2', gridRow: '1 / 2' }}
                    icon = {outboundFlightIcon}
                >
                    <Label text="FLIGHT" />
                    <Text text="ZZ1234" />
                </LabelledText>
                <LabelledText
                    gridStyles = {{ gridColumn: '2 / 2', gridRow: '1 / 2' }}
                    icon = {calendarIcon}
                >
                    <Label text="DEP DATE" />
                    <Text text="23JUL" />
                </LabelledText>
                <LabelledText
                    gridStyles = {{ gridColumn: '1 / 2', gridRow: '2 / 2' }}
                    icon = {finIcon}
                >
                    <Label text="FIN" />
                    <Text text="BRK7A" />
                </LabelledText>
                <LabelledText
                    gridStyles = {{ gridColumn: '2 / 2', gridRow: '2 / 2' }}
                    icon = {clockIcon}
                >
                    <Label text="TTD" />
                    <Text text="7h 17m" />
                </LabelledText>
                </div>
            </Card>
            <div className={styles.bagandcargocards}>
                <Card>
                <LabelledText gridStyles={{}} icon={bagIcon} largeText={true}>
                    <Label text ="OK / NOT OK TO LOAD" />
                    <div className={styles.toloadcounts}>
                        <Text text="5" size="large" color="success" />
                        <Text text="/" size="large"/>
                        <Text text="1" size="large" color="error"/>
                    </div>
                </LabelledText>
                </Card>
                <Card>
                <LabelledText gridStyles={{}} icon={pieceIcon} largeText={true}>
                    <Label text="OK / NOT OK TO LOAD" />
                    <div className={styles.toloadcounts}>
                        <Text text="5" size="large" color="success" />
                        <Text text="/0" size="large"/>
                    </div>
                </LabelledText>
                </Card>
            </div>
            <Card>
                <LabelledText gridStyles={{}} icon={emptyCartIcon} largeText={true}>
                    <Label text="ULD / CART" />
                    <Text text="BINA" size="large" />
                </LabelledText>
            </Card>
        </div>
    );
}