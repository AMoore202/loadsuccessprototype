import styles from "@/app/ui/typography/Label.module.css";

export default function Label({ text } : { text: string }) {
    return(
        <p className={styles.label}>{text}</p>
    );
}