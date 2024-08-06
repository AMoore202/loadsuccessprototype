import styles from "@/app/ui/SuccessOverlay.module.css";
import Header from "./Header";


function CircleIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56ZM45.6645 80.759L85.96 40.4705L78.5364 33.047L45.017 66.563L29.6169 53.725L22.8936 61.775L45.6645 80.759Z" fill="white"/>
        </svg>
    );
}

export default function SuccessOverlay() {
    return(
        <div className={styles.overlay}>
            <Header title="Load Success" icon="close" showLogo={false} />
            <div className={styles.content}>
                <CircleIcon />
                <p className={styles.text}>LOADED BINA</p>
            </div>
        </div>
    );
}