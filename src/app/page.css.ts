import {globalStyle, style} from "@vanilla-extract/css";

export const main = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6rem",
    minHeight: "100vh",
});

export const description = style({
    display: "inherit",
    justifyContent: "inherit",
    alignItems: "inherit",
    fontSize: "0.85rem",
    maxWidth: "var(--max-width)",
    width: "100%",
    zIndex: "2",
    fontFamily: "var(--font-mono)",

    "@media": {
        '(max-width: 700px)': {
            fontSize: "0.8rem"
        }
    }
});

globalStyle(`${description} a`, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",

    "@media": {
        '(max-width: 700px)': {
            padding: "1rem"
        }
    }
});

globalStyle(`${description} p`, {
    position: "relative",
    margin: 0,
    padding: "1rem",
    backgroundColor: "rgba(var(--callout-rgb), 0.5)",
    border: "1px solid rgba(var(--callout-border-rgb), 0.3)",
    borderRadius: "var(--borderRadius)",

    "@media": {
        '(max-width: 700px)': {
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            width: "100%",
            alignItems: "center",
            inset: "0 0 auto",
            padding: "2rem 1rem 1.4rem",
            borderRadius: "0",
            border: "none",
            borderBottom: "1px solid rgba(var(--callout-border-rgb), 0.25)",
            background: "linear-gradient(to bottom, rgba(var(--background-start-rgb), 1),rgba(var(--callout-rgb), 0.5))",
            backgroundClip: "padding-box",
            backdropFilter: "blur(24px)"
        }
    }
});

globalStyle(`${description} div`, {
    "@media": {
        '(max-width: 700px)': {
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            width: "100%",
            alignItems: "flex-end",
            pointerEvents: "none",
            inset: "auto 0 0",
            padding: "2rem",
            height: "200px",
            background: "linear-gradient(to bottom, transparent 0%, rgb(var(--background-end-rgb)) 40%)",
            zIndex: "1",
        }
    }
});

export const code = style({
    fontWeight: 700,
    fontFamily: "var(--font-mono)",
});

export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(25%, auto))",
    maxWidth: "100%",
    width: "var(--max-width)",

    "@media": {
        '(max-width: 700px)': {
            gridTemplateColumns: "1fr",
            marginBottom: "120px",
            maxWidth: "320px",
            textAlign: "center",
        },
        '(min-width: 701px) and (max-width: 1120px)': {
            gridTemplateColumns: "repeat(2, 50%)"
        }
    }
});

export const center = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "4rem 0",

    selectors: {
        "&::before": {
            content: "",
            left: "50%",
            position: "absolute",
            filter: "blur(45px)",
            transform: "translateZ(0)",
            background: "var(--secondary-glow)",
            borderRadius: "50%",
            width: "480px",
            height: "360px",
            marginLeft: "-400px",

            "@media": {
                '(max-width: 700px)': {
                    transform: "none",
                    height: "300px"
                }
            }
        },
        "&::after": {
            content: "",
            left: "50%",
            position: "absolute",
            filter: "blur(45px)",
            transform: "translateZ(0)",
            background: "var(--primary-glow)",
            width: "240px",
            height: "180px",
            zIndex: "-1",
        },
    },

    "@media": {
        '(max-width: 700px)': {
            padding: "8rem 0 6rem"
        }
    }
});

export const logo = style({
    position: "relative",
    "@media": {
        '(prefers-color-scheme: dark)': {
            filter: "invert(1) drop-shadow(0 0 0.3rem #ffffff70)"
        }
    }
});

export const vercelLogo = style({
    "@media": {
        '(prefers-color-scheme: dark)': {
            filter: "invert(1)"
        }
    }
})