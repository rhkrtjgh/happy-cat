import { commonStyles } from "../style/common";

export const catStyles = {
    container: commonStyles.section,

    card: {
        ...commonStyles.card,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        gap: "14px",
        paddingTop: "18px",
        paddingBottom: "20px",
    },

    wrapper: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        gap: "12px",
        width: "100%",
    },

    header: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
    },

    bubbleRow: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },

    imageWrap: {
        width: "116px",
        height: "116px",
        borderRadius: "999px",
        background: "linear-gradient(180deg, #fffaf5 0%, #fff1f8 100%)",
        border: "1px solid #ffe2f0",
        boxShadow: "0 8px 20px rgba(255, 160, 200, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden" as const,
    },

    image: {
        width: "88%",
        height: "88%",
        objectFit: "contain" as const,
    },

    bubble: {
        background: "#fff3f8",
        border: "1px solid #ffd7ea",
        padding: "14px 16px",
        borderRadius: "18px",
        fontSize: "14px",
        lineHeight: 1.5,
        color: "#333",
        width: "100%",
        minWidth: "220px",
        maxWidth: "300px",
        textAlign: "center" as const,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        boxSizing: "border-box" as const,
        boxShadow: "0 6px 18px rgba(255, 173, 207, 0.22)",
    },

    bubbleWrap: {
        position: "relative" as const,
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto",
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
    },

    bubbleTail: {
        position: "absolute" as const,
        top: "-8px",
        left: "calc(50% - 8px)",
        width: 0,
        height: 0,
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderBottom: "10px solid #ffd7ea",
    },

    bubbleTailInner: {
        position: "absolute" as const,
        top: "-6px",
        left: "calc(50% - 7px)",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
        borderBottom: "9px solid #fff3f8",
    },

    name: {
        fontWeight: 700,
        color: "#ff6fa3",
    },

    message: {
        width: "100%",
        textAlign: "center" as const,
        color: "#4f4154",
        wordBreak: "keep-all" as const,
    },

    helperText: {
        margin: 0,
        fontSize: "12px",
        color: "#8e8e8e",
    },
};