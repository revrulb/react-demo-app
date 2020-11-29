import React from "react";
import { RequestItemInnerHeader } from "./requestItemInnerHeader";

type Props = {
    originDate: Date;
    price: number;
};

export const RequestItemAdditionalInformation: React.FC<Props> = ({
    originDate,
    price
}) => {
    return (
        <div className="request-tape__item__additional-info">
            <RequestItemInnerHeader title={"Дополнительно"} />
            {price} руб.
            <br />
            Заявка от {originDate.toDateString()}
        </div>
    );
};
