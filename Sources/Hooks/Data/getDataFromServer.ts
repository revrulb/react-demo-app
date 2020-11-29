import { useEffect, useState } from "react";
import { useSetRequests } from "./stateDispatch";
import { serverFaker } from "Utils";
import { fakeServerResponseTime, serverResponse } from "Constants";

export const useDataFromServer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setRequests = useSetRequests();
    const serverDataPromise = serverFaker.fakeRequest(
        serverResponse,
        fakeServerResponseTime
    );

    useEffect(() => {
        setIsLoading(true);
        serverDataPromise.then((x) => {
            setRequests(x);
            setIsLoading(false);
        });
    }, []);

    return isLoading;
};
