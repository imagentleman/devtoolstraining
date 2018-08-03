import sirv from "sirv";
import polka from "polka";
import sapper from "sapper";
import compression from "compression";
import { manifest } from "./manifest/server.js";
import { Store } from "svelte/store.js";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("assets"),
    sapper({
      manifest,
      store: request => {
        return new Store({
					done: {}
				});
      }
    })
  )
  .listen(process.env.PORT)
  .catch(err => {
    console.log("error", err);
  });
