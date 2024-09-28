import styles from "./Header.module.css";
import { HamburgerMenuIcon, CloseMenuIcon } from "./Icons";
import CloseIconButton from "./CloseIconButton";
import { PageTitle } from "./Typography";
import BrockLogo from "./BrockLogo";

interface HeaderProps {
  title: string;
  icon?: "hamburger" | "close";
  showLogo?: boolean;
  backButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Header({
  title,
  icon = "hamburger",
  showLogo = true,
  backButton,
}: HeaderProps) {
  const menuIcon =
    icon === "close" ? (
      <CloseIconButton backButton={backButton} />
    ) : (
      <HamburgerMenuIcon />
    );

  return (
    <div className={styles.header}>
      <div className={styles.leftcontent}>
        {menuIcon}
        <PageTitle text={title} />
      </div>
      {showLogo && (
        <div className={styles.rightcontent}>
          <p className={styles.logotext}>Prototype by</p>
          <BrockLogo />
        </div>
      )}
    </div>
  );
}
