/* eslint-disable camelcase */
import React from "react";
import { createUseStyles } from "react-jss";
import { Loader } from "./loader";

type Props = {
    isLoading: boolean;
};

const useStyles = createUseStyles({
    app__container: {
        display: "flex",
        "flex-direction": "column",
        "text-align": "center"
    },
    app__container__loading: {
        display: "flex",
        "justify-content": "center"
    }
});

export const AppContainer: React.FC<Props> = ({ children, isLoading }) => {
    const styles = useStyles();

    if (isLoading) {
        return (
            <div className={styles.app__container__loading}>
                <Loader />
            </div>
        );
    }

    return <div className={styles.app__container}>{children}</div>;
};
