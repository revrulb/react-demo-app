import React, { useEffect, useState } from "react";
import { Filters } from "Components";
import { AppContainer } from "Views";
import { useDataFromServer } from "Hooks/Data/getDataFromServer";
import { useSetRequests, useAllRequests, useRequiredRequests } from "Hooks";

export const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const allRequests = useAllRequests();
    const requiredRequests = useRequiredRequests();
    const setRequests = useSetRequests();
    const serverDataPromise = useDataFromServer();

    useEffect(() => {
        setIsLoading(true);
        serverDataPromise.then((x) => {
            setRequests(x);
            setIsLoading(false);
        });
    }, []);

    return (
        <AppContainer>
            <Filters />
            {JSON.stringify(allRequests)}
            {JSON.stringify(requiredRequests)}
            {JSON.stringify(isLoading)}
        </AppContainer>
    );
};
