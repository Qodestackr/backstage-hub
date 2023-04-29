/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 */

import router from "../crud/routes";

export interface Env {

}

export default {
	async fetch(req: Request): Promise<Response>{
		const response = await router?.handle(req)
		return response
	}
}