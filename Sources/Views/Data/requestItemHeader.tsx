import { useSharedStyles } from "Hooks";
import React from "react";

type Props = { title: string };

export const RequestItemHeader: React.FC<Props> = ({ title }) => {
    const sharedStyles = useSharedStyles();

    return (
        <h3 className={sharedStyles["request-tape__item__header"]}>{title}</h3>
    );
};
