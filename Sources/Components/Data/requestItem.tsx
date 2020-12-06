import React from "react";
import { Request } from "Models";
import { useHover } from "Hooks";
import {
    RequestItemAdditionalInformation,
    RequestItemCompanyInfo,
    RequestItemContainer,
    RequestItemHeader
} from "Views";

type Props = { request: Request };

export const RequestItem: React.FC<Props> = ({ request }) => {
    const { hover, isHovered, unhover } = useHover();
    const { number, title, source, originDate, price } = request;

    const header = isHovered ? `№${number} - ${title}` : `Заявка №${number}`;

    return (
        <RequestItemContainer
            hover={hover}
            isHovered={isHovered}
            unhover={unhover}
        >
            <RequestItemHeader title={header} />
            <RequestItemCompanyInfo companyInfo={source} />
            <RequestItemAdditionalInformation
                originDate={originDate}
                price={price}
            />
        </RequestItemContainer>
    );
};
