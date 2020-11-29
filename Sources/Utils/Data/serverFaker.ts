export const serverFaker = {
    fakeRequest<T>(data: T, timeout: number) {
        return new Promise<T>((resolver) => {
            setTimeout(() => resolver(data), timeout);
        });
    }
};
