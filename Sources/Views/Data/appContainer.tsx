import React from "react";

type Props = {
    isLoading: boolean;
};

export const AppContainer: React.FC<Props> = ({ children, isLoading }) => {
    if (isLoading) {
        return <div className={"app__container__loading"} />;
    }

    return <div className={"app__container"}>{children}</div>;
};
