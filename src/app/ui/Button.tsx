import styles from "@/app/ui/Button.module.css";

interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

// export default function Button( {text}: ButtonProps ) {
//     return(
//         <button className={styles.button}>
//             <p className={styles.text}>
//                 {text}
//             </p>
//         </button>
//     );
// }


const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <p className={styles.text}>
                {text}
            </p>
        </button>
    );
};

export default Button;