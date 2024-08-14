import styles from "@/app/ui/typography/LabelledText.module.css"

interface LabelledTextProps {
    gridStyles: React.CSSProperties;
    children: React.ReactNode;
}

export default function LabelledText({ gridStyles, children }: LabelledTextProps) {
    return(
        <div style={gridStyles} className={styles.labelledtext}>
            {children}
        </div>
    );
}