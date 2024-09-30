import { createFactory } from "hono/factory";

import { PingController } from "../../../../adapters/controllers/PingController";
import { okResponse } from "../../../../adapters/response/response";

const factory = createFactory();

export const getPing = factory.createHandlers(async (c) => {
  const pingController = new PingController();

  return okResponse(JSON.stringify(await pingController.getPing()));
});
