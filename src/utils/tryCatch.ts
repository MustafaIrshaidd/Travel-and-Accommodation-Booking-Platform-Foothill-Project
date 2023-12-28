export const tryCatch = async (func: () => Promise<void>, handleError: (value: unknown) => any) => {
    try {
        return await func();
    }
    catch (error: any) {
        return handleError(error.message);
    }
}