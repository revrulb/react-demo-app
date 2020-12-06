import React, { useEffect, useState } from "react";
import { useSetFilters } from "Hooks";
import { FiltersInput, FiltersContainer } from "Views";

export const Filters: React.FC = () => {
    const [companyName, setCompanyName] = useState("");
    const [requestNumber, setRequestNumber] = useState("");

    const setFilters = useSetFilters();

    useEffect(() => {
        setFilters(companyName, requestNumber);
    }, [companyName, requestNumber]);

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
        </FiltersContainer>
    );
};
