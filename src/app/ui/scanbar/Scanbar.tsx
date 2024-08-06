import styles from "@/app/ui/scanbar/Scanbar.module.css"

interface ScanbarProps {
    children: React.ReactNode;
}

export default function Scanbar( {children}: ScanbarProps ) {
    return(
        <div className={styles.scanbar}>
            {children}
        </div>
    );
}