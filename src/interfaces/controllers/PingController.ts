export class PingController {
	public async getPing() {
		return {
			status: 200,
			body: {
				message: 'OK'
			}
		}
	}
}
