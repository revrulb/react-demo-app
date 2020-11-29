import React, { useState } from "react";
import {
    useSetCompanyNameInFilters,
    useSetRequestNumberInFilters
} from "Hooks";
import { FiltersInput, FiltersButton, FiltersContainer } from "Views";

export const Filters: React.FC = () => {
    const [companyName, setCompanyName] = useState("");
    const [requestNumber, setRequestNumber] = useState("");

    const setCompanyNameInFilters = useSetCompanyNameInFilters();
    const setRequestNumberInFilters = useSetRequestNumberInFilters();

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
                onClick={() => {
                    setCompanyNameInFilters(companyName);
                    setRequestNumberInFilters(requestNumber);
                }}
            />
        </FiltersContainer>
    );
};
