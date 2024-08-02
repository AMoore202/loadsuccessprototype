import styles from "@/app/ui/InstructionalText.module.css"

export default function InstructionalText({ text }: { text: string }) {
    return(
        <div className={styles.wrapper}>
            <p className={styles.text}>{text}</p>
        </div>
    );
}