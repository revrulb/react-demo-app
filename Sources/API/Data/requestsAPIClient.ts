const endpoints = {
    GET_REQUESTS: "https://run.mocky.io/v3/2a363a1a-e741-4490-b118-4978f0108441"
} as const;

export interface APIRequestItem {
    number: number;
    originDate: string;
    price: number;
    source: { inn: string; name: string };
    inn: string;
    name: string;
    title: string;
}

export const requestsAPIClient = {
    getRequests: () => {
        return fetch(endpoints.GET_REQUESTS).then<{
            data: Array<APIRequestItem>;
        }>((x) => x.json());
    }
};
