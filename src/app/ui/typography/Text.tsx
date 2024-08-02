import styles from "@/app/ui/typography/Text.module.css";

interface TextProps {
    text: string;
    size?: 'regular' | 'large';
    color?: 'black' | 'success' | 'error';
}


export default function Text({ text, size = 'regular', color = 'black' }: TextProps) {
    const sizeClass = size === 'large' ? styles['text-large']: styles['text-regular'];
    const colorClass = color === 'success'
        ? styles['text-success']
        : color === 'error'
        ? styles['text-error']
        : styles['text-black'];

    return(
        <p className={`${colorClass} ${sizeClass}`}>
            {text}
        </p>
    );
}