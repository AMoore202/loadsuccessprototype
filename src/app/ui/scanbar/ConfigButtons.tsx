import styles from "./ConfigButtons.module.css";
import { GearIcon, CloseIcon } from "./Icons";

interface OpenConfigButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function OpenConfigButton({ ...rest }: OpenConfigButtonProps) {
  return (
    <button type="button" className={styles.openbutton} {...rest}>
      <GearIcon />
    </button>
  );
}

interface CloseConfigButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CloseConfigButton({ ...rest }: CloseConfigButtonProps) {
  return (
    <button type="button" className={styles.closebutton} {...rest}>
      <CloseIcon />
    </button>
  );
}
