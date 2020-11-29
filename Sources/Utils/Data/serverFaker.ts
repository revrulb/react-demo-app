export const serverFaker = {
    fakeRequest<T>(data: Array<T>, timeout: number) {
        return new Promise<Array<T>>((resolver) => {
            setTimeout(() => resolver(data), timeout);
        });
    }
};
