import styles from "@/app/ui/LabelledTextWithIcon.module.css";

interface LabelledTextWithIconProps {
    gridStyles: React.CSSProperties;
    icon: React.ReactNode | null;
    children: React.ReactNode;
}

export default function LabelledTextWithIcon({gridStyles, icon, children}: LabelledTextWithIconProps) {
    return(
        <div style={gridStyles} className={styles.labelledtextwithicon}>
            <div className={styles.iconwrapper}>{icon}</div>
            {children}
        </div>
    );
}