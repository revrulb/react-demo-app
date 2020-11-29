import React from "react";
import { Company } from "Models";
import { RequestItemInnerHeader } from "Views";

type Props = { companyInfo: Company };

export const RequestItemCompanyInfo: React.FC<Props> = ({ companyInfo }) => {
    return (
        <div className="request-tape__item__company-info">
            <RequestItemInnerHeader title={"Заказчик"} />
            <b>ИНН</b> - {companyInfo.inn}
            <br />
            <b>Наименование</b> - {companyInfo.name}
        </div>
    );
};
