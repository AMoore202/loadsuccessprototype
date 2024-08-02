import styles from "@/app/ui/typography/LabelledText.module.css"

export default function LabelledText({ children }: { children: React.ReactNode }) {
    return(
        <div className={styles.labelledtext}>
            {children}
        </div>
    );
}