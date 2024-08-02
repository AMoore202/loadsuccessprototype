import styles from "@/app/ui/Header.module.css";
import Image from "next/image";
import { HamburgerMenuIcon } from "./Icons";
import PageTitle from "./typography/PageTitle";

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.leftcontent}>
                <HamburgerMenuIcon />
                <PageTitle text="Load Flight" />
            </div>
            <Image             
                src="/images/BrockLogo.png"
                width={78}
                height={27}
                alt='Brock Solutions Logo'
            />
        </div>
    );
}