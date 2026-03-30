import styles from "./button.module.css";

type ButtonProps = {
    primary?: boolean
    content: string
    icon?: string
}

export default function Button({primary=false, content, icon}: ButtonProps) {
    return (
        <div className={`d-flex flex-row align-center justify-center g025 radius-full ${styles.btn} ${primary? styles.btn_primary : styles.btn_norm}`}>
            {icon && <img src={icon} alt=""></img>}
            <span>{content}</span>
        </div>
    )
}
