import styles from "@/app/ui/Header.module.css";
import Image from "next/image";
import { HamburgerMenuIcon, CloseMenuIcon } from "./Icons";
import PageTitle from "./typography/PageTitle";

interface HeaderProps {
    title: string;
    icon?: 'hamburger' | 'close';
    showLogo?: boolean;
}

export default function Header({title, icon = 'hamburger' , showLogo = true}: HeaderProps) {
    const menuIcon = icon === 'close' ? <CloseMenuIcon /> : <HamburgerMenuIcon />; 
    
    return(
        <div className={styles.header}>
            <div className={styles.leftcontent}>
                {menuIcon}
                <PageTitle text={title} />
            </div>
            {showLogo && (
                <Image             
                    src="/images/BrockLogo.png"
                    width={78}
                    height={27}
                    alt='Brock Solutions Logo'
                />
            )}
        </div>
    );
}