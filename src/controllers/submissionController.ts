import type { Request, Response } from "express";
import type { CreateSubmissionDto } from "../dtos/createSubmissionDto";

export function addSubmission(req: Request, res: Response) {
	const submissionDto = req.body as CreateSubmissionDto;
	console.log(submissionDto);

	return res.status(201).json({
		success: true,
		message: "Successfully collected the submission",
		data: submissionDto,
	});
}
