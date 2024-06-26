import express, { type Express } from "express";
import { PORT } from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorker";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});

SampleWorker("SampleQueue");

sampleQueueProducer("SampleJob", {
	name: "Sanket",
	company: "Microsoft",
	position: "SDE 2 L61",
	location: "Remote | BLR | Noida",
});
