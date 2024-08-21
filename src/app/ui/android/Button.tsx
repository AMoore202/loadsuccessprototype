import styles from "./Button.module.css";

interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

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