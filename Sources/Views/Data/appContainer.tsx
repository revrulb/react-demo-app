/* eslint-disable camelcase */
import React from "react";
import { createUseStyles } from "react-jss";

type Props = {
    isLoading: boolean;
};

const useStyles = createUseStyles({
    app__container: {
        display: "flex",
        "flex-direction": "column"
    }
});

export const AppContainer: React.FC<Props> = ({ children, isLoading }) => {
    if (isLoading) {
        return <div className={"app__container__loading"} />;
    }

    const styles = useStyles();

    // @ts-ignore
    return <div className={styles.app__container}>{children}</div>;
};
