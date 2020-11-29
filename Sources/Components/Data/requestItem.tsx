import React from "react";
import { Request } from "Models";
import {
    RequestItemAdditionalInformation,
    RequestItemCompanyInfo,
    RequestItemContainer,
    RequestItemHeader
} from "Views";

type Props = { request: Request };

export const RequestItem: React.FC<Props> = ({ request }) => {
    const { number, title, source, originDate, price } = request;

    const header = `№${number} - ${title}`;

    return (
        <RequestItemContainer>
            <RequestItemHeader title={header} />
            <RequestItemCompanyInfo companyInfo={source} />
            <RequestItemAdditionalInformation
                originDate={originDate}
                price={price}
            />
        </RequestItemContainer>
    );
};
