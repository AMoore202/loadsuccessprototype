import styles from "@/app/ui/Button.module.css";

interface ButtonProps {
    text: string;
}

export default function Button( {text}: ButtonProps ) {
    return(
        <button className={styles.button}>
            <p className={styles.text}>
                {text}
            </p>
        </button>
    );
}