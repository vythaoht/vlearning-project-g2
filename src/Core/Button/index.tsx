import styles from "./button.module.scss";

type Props = {
    onClick?: () => void;
    title: string;
    color?: string;
    bgColor?: string;
    borderColor?: string;
    margin?: number;
};

function Button({
    title,
    onClick,
    color = "#fff",
    bgColor = "#f6ba35",
    borderColor = "transparent",
    margin,
}: Props) {
    return (
        <button
            style={{
                color: color,
                backgroundColor: bgColor,
                borderColor: borderColor,
                margin: margin,
            }}
            className={styles.buttonStyle}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;
