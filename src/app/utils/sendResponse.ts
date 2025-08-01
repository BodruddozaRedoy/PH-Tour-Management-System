import { Response } from "express"
import { success } from "zod"

interface TMeta {
    total: number
}
interface TResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data: T,
    meta?: TMeta
}

export const sendResponse = <T>(res:Response, data: TResponse<T>) => {

    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        meta: data.meta,
        data: data.data
    })
}