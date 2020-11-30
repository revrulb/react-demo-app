import { useSharedStyles } from "Hooks";
import React from "react";

type Props = {
    title: string;
    onClick: () => void;
};

export const FiltersButton: React.FC<Props> = ({ onClick, title }) => {
    const sharedStyles = useSharedStyles();

    return (
        <button className={sharedStyles.filters__control} onClick={onClick}>
            {title}
        </button>
    );
};
