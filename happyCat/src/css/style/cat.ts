import { commonStyles } from "../style/common";

export const catStyles = {
    container: commonStyles.section,
    
    card: commonStyles.card,

    wrapper: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        gap: "10px",
        marginTop: "12px",
    },

    header: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "24px",
        justifyContent: "center"
    },

    imageWrap: {
        width: "100px",
        height: "100px"
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain" as const,
    },

    bubble: {
        background: "#fff3f8",
        padding: "12px 14px",
        borderRadius: "16px",
        fontSize: "14px",
        lineHeight: 1.5,
        color: "#333",
        maxWidth: "240px",
        textAlign: "center" as const,
        justifyContent: "center"
    },

    name: {
        fontWeight: 700,
        color: "#ff6fa3",
    },
};