let keysCount = 0;

export const setGlobalKeys = (count) => {
    keysCount = count;
};

export const getGlobalKeys = () => {
    return keysCount;
};