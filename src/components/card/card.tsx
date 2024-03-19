import * as styles from "./card.css.ts";

type Props = {
    link: string;
    title: string;
    description: string;
}

export default function Card({ link, title, description }: Props) {
    return (
        <a
            href={link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>
                { title } <span>-&gt;</span>
            </h2>
            <p>{ description }</p>
        </a>
    )
}