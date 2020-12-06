import { useEffect, useState } from "react";
import { useSetRequests } from "./stateDispatch";
import { APIRequestItem, requestsAPIClient } from "API";
import { Request } from "Models";

const requestFromAPIToRequest = (source: APIRequestItem): Request => {
    return {
        ...source,
        originDate: new Date(source.originDate)
    };
};

export const useRequestsFromServer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setRequests = useSetRequests();

    useEffect(() => {
        let isMounted = true;

        setIsLoading(true);

        requestsAPIClient
            .getRequests()
            .then((x) => {
                const requestsFromAPI = x.data;

                if (isMounted) {
                    setRequests(requestsFromAPI.map(requestFromAPIToRequest));
                    setIsLoading(false);
                }
            })
            .catch(() => {
                if (isMounted) {
                    setRequests([]);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return isLoading;
};
