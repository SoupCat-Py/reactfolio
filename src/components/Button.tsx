import type {ReactNode} from "react";

type ButtonProps = {
    href?: string,
    section?: boolean
    primary?: boolean,
    label?: string,
    icon?: ReactNode
}

export default function Button({href, section = false, primary = false, label, icon}: ButtonProps) {

    // define the stuff inside the button conditionally
    const content = (<>
        {label && <span>{label}</span>}
        {icon && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="CurrentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{icon}</svg>}
    </>)

    // classes to be reused
    const classes = `btn ${primary ? "btn-primary" : "btn-norm"} d-flex flex-row p05 g025 nodeco`

    // determine whether to make an anchor or a button
    if (href) {
        return <a href={href} target={section? "_self" : "_blank"} className={classes}>{content}</a>
    }
    else {
        return <button className={classes}>{content}</button>
    }
}