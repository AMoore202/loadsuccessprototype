import styles from "./NavBar.module.css";

interface NavBarProps {
    children: React.ReactNode;
}

export default function NavBar( {children}: NavBarProps) {
    return(
        <div className={styles.navbar}>
            {children}
        </div>
    );
}