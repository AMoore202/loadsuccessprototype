import styles from "./LabelledText.module.css";

interface LabelledTextProps {
    gridStyles: React.CSSProperties;
    showIcon?: boolean;
    icon: React.ReactNode | null;
    largeText?: boolean; 
    children: React.ReactNode;
}

export default function LabelledText({gridStyles, showIcon=true, icon, largeText=false, children}: LabelledTextProps) {
    const iconSizeClass = largeText ? styles['iconwrapper-large'] : styles['iconwrapper-regular'];
    
    return(
        <div style={gridStyles} className={styles.labelledtextwithicon}>
            {showIcon && <div className={`${iconSizeClass}`}>{icon}</div>}
            <div className={styles.labelledtext}>
                {children}
            </div>
        </div>
    );
}