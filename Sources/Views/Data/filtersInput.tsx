import React from "react";
import { useSharedStyles } from "Hooks";

type Props = {
    value: string;
    newValueHandler: (value: string) => void;
    placeholder?: string;
};

export const FiltersInput: React.FC<Props> = ({
    newValueHandler,
    value,
    placeholder
}) => {
    const sharedStyles = useSharedStyles();

    return (
        <input
            className={sharedStyles.filters__control}
            value={value}
            placeholder={placeholder}
            onChange={(x) => newValueHandler(x.target.value)}
        />
    );
};
