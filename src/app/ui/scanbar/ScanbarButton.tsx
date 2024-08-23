import styles from "./ScanbarButton.module.css";
import ScanButtonLight from "./ScanButtonLight";
import { motion, MotionProps } from "framer-motion";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | "onAnimationStart"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onDragTransitionEnd"
  | "onUpdate"
> &
  Omit<MotionProps, "transition" | "transitionEnd"> & {
    transition?: MotionProps["transition"];
    scanButtonLightException?: boolean;
  };

export default function ScanbarButton({
  scanButtonLightException = false,
  ...rest
}: ButtonProps) {
  return (
    <div className={styles.outer}>
      <motion.button
        className={styles.inner}
        whileTap={{ scale: 0.95, backgroundColor: "#242424" }}
        {...rest}
      >
        <ScanButtonLight exception={scanButtonLightException} />
        <p className={styles.text}>Scan a Bag</p>
      </motion.button>
    </div>
  );
}
