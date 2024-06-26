import { type Job, Worker } from "bullmq";
import redisConnection from "../config/redisConfig";
import SampleJob from "../jobs/sampleJob";

export default function SampleWorker(queueName: string) {
	new Worker(
		queueName,
		async (job: Job) => {
			console.log("Sample job worker kicking");
			if (job.name === "SampleJob") {
				const sampleJobInstance = new SampleJob(job.data);

				sampleJobInstance.handle(job);

				return true;
			}
		},
		{
			connection: redisConnection,
		},
	);
}
