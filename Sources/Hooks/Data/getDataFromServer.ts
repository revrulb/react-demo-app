import { Request } from "Models";

export const useDataFromServer: () => Promise<Array<Request>> = () => {
    const fakeInterval = 2500;

    return new Promise<Array<Request>>((resolver) => {
        setTimeout(
            () =>
                resolver([
                    {
                        number: 0,
                        originDate: new Date(),
                        price: 11,
                        source: { inn: "ss", name: "sfas" },
                        title: "aaa"
                    }
                ]),
            fakeInterval
        );
    });
};
