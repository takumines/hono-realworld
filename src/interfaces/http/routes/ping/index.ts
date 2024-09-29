import { Hono } from "hono";
import { getPing } from "./getPing"

const app = new Hono()

app.get('/', ...getPing)

export const pingRoute = app
