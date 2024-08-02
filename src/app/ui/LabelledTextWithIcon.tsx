import styles from "@/app/ui/LabelledTextWithIcon.module.css";

export default function LabelledTextWithIcon({
    gridStyles,
    icon, 
    children
} : {
    gridStyles: React.CSSProperties,
    icon: React.ReactNode,
    children: React.ReactNode,
} ) {
    return(
        <div style={gridStyles} className={styles.labelledtextwithicon}>
            <div className={styles.iconwrapper}>{icon}</div>
            {children}
        </div>
    );
}