import type {ReactNode} from "react";

type ButtonProps = {
    primary?: boolean,
    label?: string,
    icon?: ReactNode,
    href?: string,
    local?: boolean
}

export default function Button({href, primary = false, local = false, label, icon}: ButtonProps) {
    return (
        <a
            className={`btn ${primary ? "btn-primary" : "btn-norm"} d-flex flex-row p05 g025 nodeco`}
            href={href}
            target={local ? "_self" : "_blank"}
        >
            {label && <span>{label}</span>}
            {icon && <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="radius-none"
            >
                {icon}
            </svg>}
        </a>
    )
}
