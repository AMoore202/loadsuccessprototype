import styles from "./Text.module.css";

interface TextProps {
    text: string;
    fill?: boolean;
    size?: 'regular' | 'large';
    color?: 'black' | 'success' | 'error' | 'white';
}

export default function Text({ text, fill=false, size = 'regular', color = 'black' }: TextProps) {
    const fillClass = fill ? styles['text-fill'] : '';
    const sizeClass = size === 'large' ? styles['text-large']: styles['text-regular'];
    const colorClass = color === 'success'
        ? styles['text-success']
        : color === 'error'
        ? styles['text-error']
        : color === 'white'
        ? styles['text-white']
        : styles['text-black'];

    return(
        <p className={`${fillClass} ${colorClass} ${sizeClass}`}>
            {text}
        </p>
    );
}