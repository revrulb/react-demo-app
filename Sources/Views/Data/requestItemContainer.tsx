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
    }
});

export const RequestItemContainer: React.FC = ({ children }) => {
    const styles = useStyles();

    return <div className={styles["request-tape__item"]}>{children}</div>;
};
