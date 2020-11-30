/* eslint-disable camelcase */
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    filters__container: {
        display: "flex",
        "flex-flow": "row",
        "justify-content": "center"
    }
});

export const FiltersContainer: React.FC = ({ children }) => {
    const styles = useStyles();
    return <div className={styles.filters__container}>{children}</div>;
};
