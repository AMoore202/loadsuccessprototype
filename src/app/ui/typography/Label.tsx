import styles from "@/app/ui/typography/Label.module.css";

interface LabelProps {
    text: string;
    color?: 'primary' | 'white';
}

export default function Label({ text, color = 'primary' }: LabelProps) {
    const colorClass = color === 'white' ? styles['label-white']: styles['label-primary'];
    
    return(
        <p className={`${styles.label} ${colorClass}`}>{text}</p>
    );
}