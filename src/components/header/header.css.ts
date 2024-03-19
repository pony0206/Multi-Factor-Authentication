import { globalStyle, style } from "@vanilla-extract/css";

export const card = style({
  padding: "1rem 1.2rem",
  borderRadius: "var(--borderRadius)",
  background: "rgba(var(--card-rgb), 0)",
  border: "1px solid rgba(var(--card-border-rgb), 0)",
  transition: "background 200ms, border 200ms",

  selectors: {
    "&:hover": {
      "@media": {
        "(hover: hover) and (pointer: fine)": {
          background: "rgba(var(--card-rgb), 0.1)",
          border: "1px solid rgba(var(--card-border-rgb), 0.15)",
        },
      },
    },
  },

  "@media": {
    "(maxWidth: 700px)": {
      padding: "1rem 2.5rem",
    },
  },
});

globalStyle(`${card} span`, {
  display: "inline-block",
  transition: "transform 200ms",
});

globalStyle(`${card}:hover span`, {
  "@media": {
    "(hover: hover) and (pointer: fine)": {
      transform: "translateX(4px)",
    },
    "(prefers-reduced-motion)": {
      transform: "none",
    },
  },
});

globalStyle(`${card} h2`, {
  fontWeight: "600",
  marginBottom: "0.7rem",
  "@media": {
    "(maxWidth: 700px)": {
      marginBottom: "0.5rem",
    },
  },
});

globalStyle(`${card} p`, {
  margin: "0",
  opacity: "0.6",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  maxWidth: "30ch",
  textWrap: "balance",
});
