import React from "react";

type Props = { title: string };

export const RequestItemInnerHeader: React.FC<Props> = ({ title }) => {
    return <h4 className="request-tape__item__header">{title}</h4>;
};
