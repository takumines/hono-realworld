const baseHeaders = {
	"Content-Type": "application/json",
};

/**
 * ステータスコード200のレスポンスを返す
 */
export const okResponse = (result: BodyInit) => {
	return new Response(result, {
		status: 200,
		headers: baseHeaders,
	});
};
