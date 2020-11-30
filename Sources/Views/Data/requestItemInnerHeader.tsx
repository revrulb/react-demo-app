import { useSharedStyles } from "Hooks";
import React from "react";

type Props = { title: string };

export const RequestItemInnerHeader: React.FC<Props> = ({ title }) => {
    const sharedStyles = useSharedStyles();

    return (
        <h4 className={sharedStyles["request-tape__item__header"]}>{title}</h4>
    );
};
