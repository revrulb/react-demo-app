import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "request-tape__item": {
        display: "flex",
        "flex-direction": "column",
        width: "24%",
        "box-sizing": "border-box",
        padding: "10px",
        border: "1px rgb(153, 153, 153) solid",
        margin: "5px"
    },
    "request-tape__item__hovered": {
        border: "1px black solid",
        cursor: "pointer",
        background: "#e7e7e7"
    }
});

type Props = {
    isHovered: boolean;
    hover: () => void;
    unhover: () => void;
};

export const RequestItemContainer: React.FC<Props> = ({
    children,
    hover,
    isHovered,
    unhover
}) => {
    const styles = useStyles();

    return (
        <div
            className={`${styles["request-tape__item"]} ${
                isHovered ? styles["request-tape__item__hovered"] : ""
            }`}
            onMouseEnter={hover}
            onMouseLeave={unhover}
        >
            {children}
        </div>
    );
};
