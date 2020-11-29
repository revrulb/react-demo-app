import React, { useState } from "react";
import { useSetFilters } from "Hooks";
import { FiltersInput, FiltersButton, FiltersContainer } from "Views";

export const Filters: React.FC = () => {
    const [companyName, setCompanyName] = useState("");
    const [requestNumber, setRequestNumber] = useState("");

    const setFilters = useSetFilters();

    return (
        <FiltersContainer>
            <FiltersInput
                newValueHandler={setRequestNumber}
                value={requestNumber}
                placeholder={"Номер заявки"}
            />
            <FiltersInput
                value={companyName}
                newValueHandler={setCompanyName}
                placeholder={"Название компании"}
            />
            <FiltersButton
                title={"Установить фильтры"}
                onClick={() => setFilters(companyName, requestNumber)}
            />
        </FiltersContainer>
    );
};
