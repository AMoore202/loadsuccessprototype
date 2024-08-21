import styles from "./Typography.module.css";

interface LabelProps {
    text: string;
    color?: 'primary' | 'white';
}

export function Label({ text, color = 'primary' }: LabelProps) {
    const colorClass = color === 'white' ? styles['label-white']: styles['label-primary'];
    
    return(
        <p className={`${styles.label} ${colorClass}`}>{text}</p>
    );
}

interface TextProps {
    text: string;
    fill?: boolean;
    size?: 'regular' | 'large';
    color?: 'black' | 'success' | 'error' | 'white';
}

export function Text({ text, fill=false, size = 'regular', color = 'black' }: TextProps) {
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

export function PageTitle({ text } : { text: string }) {
    return(
        <p className={styles.pagetitle}>{text}</p>
    );
}