import express, { type Express } from "express";
import bullBoardAdapter from "./config/bullBoardConfig";
import { PORT } from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorker";

const app: Express = express();

app.use("/api", apiRouter);

app.use("/ui", bullBoardAdapter.getRouter());

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
	console.log(`BullBoard dashboard running on: http://localhost:${PORT}/ui`);
});

SampleWorker("SampleQueue");

sampleQueueProducer("SampleJob", {
	name: "Sanket",
	company: "Microsoft",
	position: "SDE 2 L61",
	location: "Remote | BLR | Noida",
});
