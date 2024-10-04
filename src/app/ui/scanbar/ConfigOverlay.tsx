import styles from "./ConfigOverlay.module.css";
import { PageTitle, Text } from "../android/Typography";
import { CloseConfigButton } from "./ConfigButtons";
import { ExceptionSelect, SuccessSoundSelect } from "./ExceptionSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox } from "@mui/material";

interface ConfigOverlayProps {
  closeButton: React.MouseEventHandler<HTMLButtonElement>;
  exceptionInputSelection: string;
  exceptionInputChange: (event: SelectChangeEvent<string>) => void;
  canOverrideSelection: boolean;
  handleOverrideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  canOverrideShown: boolean;
  successSoundInputSelection: string;
  successSoundInputChange: (event: SelectChangeEvent<string>) => void;
}

export default function ConfigOverlay({
  closeButton,
  exceptionInputSelection,
  exceptionInputChange,
  canOverrideSelection,
  handleOverrideChange,
  canOverrideShown = true,
  successSoundInputSelection,
  successSoundInputChange,
}: ConfigOverlayProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.title}>
        <PageTitle text="Configuration" />
        <CloseConfigButton onClick={closeButton} />
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <ExceptionSelect
            value={exceptionInputSelection}
            onChange={exceptionInputChange}
          />
          {canOverrideShown && (
            <div className={styles.option}>
              <Checkbox
                checked={canOverrideSelection}
                onChange={handleOverrideChange}
                size="medium"
                sx={{
                  color: "#808080",
                  "&.Mui-checked": {
                    color: "#808080",
                  },
                }}
              />
              <p className={styles.label}>Can override exception?</p>
            </div>
          )}
        </div>
        <SuccessSoundSelect
          value={successSoundInputSelection}
          onChange={successSoundInputChange}
        />
      </div>
    </div>
  );
}
