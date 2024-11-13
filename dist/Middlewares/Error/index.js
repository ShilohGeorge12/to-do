export function ErrorBoundary(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
}
;
export function ErrorHandler(error, req, res, next) {
    console.log('-> ', error.message);
    res.status(500).json({ error: `${error.message}` });
}
;
