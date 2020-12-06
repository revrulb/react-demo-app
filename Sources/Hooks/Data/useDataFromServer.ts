import { useEffect, useState } from "react";
import { useSetRequests } from "./stateDispatch";
import { APIRequestItem, requestsAPIClient } from "API";
import { Request } from "Models";

export const useDataFromServer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setRequests = useSetRequests();

    useEffect(() => {
        setIsLoading(true);

        requestsAPIClient
            .getRequests()
            .then((x) => {
                const requestsFromAPI = x.data;

                const requestFromAPIToRequest = (
                    source: APIRequestItem
                ): Request => {
                    return {
                        ...source,
                        originDate: new Date(source.originDate)
                    };
                };

                setRequests(requestsFromAPI.map(requestFromAPIToRequest));
                setIsLoading(false);
            })
            .catch(() => {
                setRequests([]);
            });
    }, []);

    return isLoading;
};
