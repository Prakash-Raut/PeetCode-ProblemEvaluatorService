import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";

export const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
	try {
		schema.parse({ ...req.body });
		next();
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			success: false,
			message: "Invalid request params received",
			data: {},
			error: error,
		});
	}
};
