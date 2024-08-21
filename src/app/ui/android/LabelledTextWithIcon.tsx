import styles from "./LabelledTextWithIcon.module.css";

interface LabelledTextWithIconProps {
    gridStyles: React.CSSProperties;
    icon: React.ReactNode | null;
    largeText?: boolean; 
    children: React.ReactNode;
}

export default function LabelledTextWithIcon({gridStyles, icon, largeText=false, children}: LabelledTextWithIconProps) {
    const iconSizeClass = largeText ? styles['iconwrapper-large'] : styles['iconwrapper-regular'];
    
    return(
        <div style={gridStyles} className={styles.labelledtextwithicon}>
            <div className={`${iconSizeClass}`}>{icon}</div>
            {children}
        </div>
    );
}