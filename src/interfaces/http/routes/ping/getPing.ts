import { createFactory } from "hono/factory";

import { PingController } from "../../../controllers/PingController";
import { okResponse } from "../../response/response";

const factory =
	createFactory();

export const getPing =
	factory.createHandlers(
		async (
			c,
		) => {
			const pingController =
				new PingController();

			return okResponse(
				JSON.stringify(
					await pingController.getPing(),
				),
			);
		},
	);
