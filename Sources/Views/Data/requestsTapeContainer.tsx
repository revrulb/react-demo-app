import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "requests-tape__container": {
        display: "flex",
        "flex-wrap": "wrap"
    }
});

export const RequestsTapeContainer: React.FC = ({ children }) => {
    const styles = useStyles();

    return <div className={styles["requests-tape__container"]}>{children}</div>;
};
