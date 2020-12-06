import React from "react";
import { Filters, RequestsTape } from "Components";
import { AppContainer } from "Views";
import { useRequestsFromServer } from "Hooks";

export const App: React.FC = () => {
    const isLoading = useRequestsFromServer();

    return (
        <AppContainer isLoading={isLoading}>
            <Filters />
            <RequestsTape />
        </AppContainer>
    );
};
