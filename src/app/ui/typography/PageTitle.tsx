import styles from "@/app/ui/typography/PageTitle.module.css";

export default function PageTitle({ text } : { text: string }) {
    return(
        <p className={styles.pagetitle}>{text}</p>
    );
}