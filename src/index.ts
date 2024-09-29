import { Hono } from "hono";
import { logger } from "hono/logger";
import { pingRoute } from "./interfaces/http/routes/ping";

const app =
	new Hono();

// ミドルウェアの登録
app.use(
	logger(),
);

app.route(
	"/ping",
	pingRoute,
);

export default app;
