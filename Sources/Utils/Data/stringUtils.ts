export const stringUtils = {
    includes: (source: string | number, target: string) => {
        return source.toString().toLowerCase().includes(target.toLowerCase());
    }
};
