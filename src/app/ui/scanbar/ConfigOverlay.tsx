import styles from "./ConfigOverlay.module.css";
import { PageTitle } from "../android/Typography";
import { CloseConfigButton } from "./ConfigButtons";
import ExceptionSelect from "./ExceptionSelect";
import { SelectChangeEvent } from "@mui/material/Select";

interface ConfigOverlayProps {
  closeButton: React.MouseEventHandler<HTMLButtonElement>;
  exceptionInputSelection: string;
  exceptionInputChange: (event: SelectChangeEvent<string>) => void;
}

export default function ConfigOverlay({
  closeButton,
  exceptionInputSelection,
  exceptionInputChange,
}: ConfigOverlayProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.title}>
        <PageTitle text="Configuration" />
        <CloseConfigButton onClick={closeButton} />
      </div>
      <div className={styles.content}>
        <ExceptionSelect
          value={exceptionInputSelection}
          onChange={exceptionInputChange}
        />
      </div>
    </div>
  );
}
