import { Request, Response, NextFunction } from "express";

export function errorHandler(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) {

    console.error(error);

    return res.status(500).json({
        error: "Something went wrong. Please try again."
    });

}