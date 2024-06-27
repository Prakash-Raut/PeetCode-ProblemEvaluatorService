import express from "express";
import { addSubmission } from "../../controllers/submissionController";
import { CreateSubmissionDtoSchema } from "../../dtos/createSubmissionDto";
import { validate } from "../../validators/zodValidator";

const submissionRouter = express.Router();

submissionRouter.post("/", validate(CreateSubmissionDtoSchema), addSubmission);

export default submissionRouter;
