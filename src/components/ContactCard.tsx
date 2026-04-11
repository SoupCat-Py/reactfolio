import type {ReactNode} from "react";

type ContactCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    link: string;
}

export default function ContactCard({icon, title, description, link}: ContactCardProps) {
    return (
        <article className="d-flex flex-row justify-center align-start radius-card p2 g2">
            <div className="bg-light d-flex align-center justify-center">
                {/*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 48 48" version="1.1">*/}
                {/*    <path style="fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(85.882354%,75.686276%,23.137255%);stroke-opacity:1;stroke-miterlimit:4;" d="M 6.335938 5.144531 C 4.681641 3.945312 2 3.017578 2 5.970703 C 2 6.560547 2.349609 10.923828 2.556641 11.630859 C 3.269531 14.09375 5.685547 14.380859 8 14 C 3.955078 14.664062 3.111328 17.207031 5.332031 19.410156 C 6.363281 20.427734 7.246094 21 8 21 C 10 21 11.134766 18.230469 11.5 17.5 C 11.832031 16.832031 12 16.332031 12 16 C 12 16.332031 12.167969 16.832031 12.5 17.5 C 12.865234 18.230469 14 21 16 21 C 16.753906 21 17.636719 20.429688 18.667969 19.410156 C 20.888672 17.207031 20.044922 14.664062 16 14 C 18.314453 14.380859 20.730469 14.09375 21.443359 11.630859 C 21.650391 10.923828 22 6.558594 22 5.970703 C 22 3.017578 19.320312 3.945312 17.664062 5.144531 C 15.371094 6.806641 12.904297 10.191406 12 12 C 11.095703 10.191406 8.628906 6.806641 6.335938 5.144531 " transform="matrix(2,0,0,2,0,0)"/>*/}
                {/*</svg>*/}
            </div>
        </article>
    )
}

/*
* <svg
* xmlns="http://www.w3.org/2000/svg"
* width="24"
* height="24"
* viewBox="0 0 24 24"
* fill="none"
* stroke="#DBC13B"
* stroke-width="1.5"
* stroke-linecap="round"
* stroke-linejoin="round">
*   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
*   <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856" />
* </svg>*/