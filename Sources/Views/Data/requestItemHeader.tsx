import React from "react";

type Props = { title: string };

export const RequestItemHeader: React.FC<Props> = ({ title }) => {
    return <h3 className="request-tape__item__header">{title}</h3>;
};
