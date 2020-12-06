import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    loader: {
        display: "flex"
    }
});

export const Loader: React.FC = () => {
    const styles = useStyles();

    return <div className={styles.loader}>Данные загружаются...</div>;
};
