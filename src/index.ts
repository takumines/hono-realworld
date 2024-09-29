import { Hono } from 'hono'
import { pingRoute } from "./interfaces/http/routes/ping"
import { logger } from "hono/logger"

const app = new Hono()

// ミドルウェアの登録
app.use(logger())

app.route('/ping', pingRoute)

export default app
