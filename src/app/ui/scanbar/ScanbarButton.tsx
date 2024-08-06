import styles from "./ScanbarButton.module.css";
import ScanButtonLight from "./ScanButtonLight";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ScanbarButton( {...rest}: ButtonProps ) {
    return(
        <div className={styles.outer}>
            <button className={styles.inner} {...rest}>
                <ScanButtonLight />
                <p className={styles.text}>
                    Scan a Bag
                </p>
            </button>
        </div>
    );
}