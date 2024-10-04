import styles from "@/app/ui/scanbar/Scanbar.module.css";
import React from "react";

interface ScanbarProps {
  children: React.ReactNode;
}

export default function Scanbar({ children }: ScanbarProps) {
  const childrenArray = React.Children.toArray(children);
  const leftContentChildren = childrenArray.slice(0, 2);
  const rightContentChild = childrenArray.slice(2);

  return (
    <div className={styles.scanbar}>
      <div className={styles.leftcontent}>{leftContentChildren}</div>
      {rightContentChild}
    </div>
  );
}
