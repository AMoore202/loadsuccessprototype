import styles from "./ConfigOverlay.module.css";
import { PageTitle } from "../android/Typography";
import { CloseIcon } from "./Icons";
import ExceptionSelect from "./ExceptionSelect";

export default function ConfigOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.title}>
        <PageTitle text="Configuration" />
        <CloseIcon />
      </div>
      <div className={styles.content}>
        <ExceptionSelect />
      </div>
    </div>
  );
}
