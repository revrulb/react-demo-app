import React from "react";

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
    return (
        <input
            className="filters__control"
            value={value}
            placeholder={placeholder}
            onChange={(x) => newValueHandler(x.target.value)}
        />
    );
};
