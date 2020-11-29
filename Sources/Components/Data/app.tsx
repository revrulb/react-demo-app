import React from "react";
import { Filters, RequestsTape } from "Components";
import { AppContainer } from "Views";
import { useDataFromServer } from "Hooks";

export const App: React.FC = () => {
    const isLoading = useDataFromServer();

    return (
        <AppContainer isLoading={isLoading}>
            <Filters />
            <RequestsTape />
        </AppContainer>
    );
};
