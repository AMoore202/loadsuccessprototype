import styles from "@/app/ui/NavBar.module.css";
import Button from "./Button";

interface NavBarProps {
    buttonText: string;
}

export default function NavBar( {buttonText}: NavBarProps) {
    return(
        <div className={styles.navbar}>
            <Button text={buttonText} />
        </div>
    );
}