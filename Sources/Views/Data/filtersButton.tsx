import React from "react";

type Props = {
    title: string;
    onClick: () => void;
};

export const FiltersButton: React.FC<Props> = ({ onClick, title }) => {
    return (
        <button className="filters__control" onClick={onClick}>
            {title}
        </button>
    );
};
