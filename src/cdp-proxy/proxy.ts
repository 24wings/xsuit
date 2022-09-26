import {Devtools} from "https://deno.land/x/chrome_remote_interface@0.4.3/mod.ts";
import { Network } from "https://deno.land/x/chrome_remote_interface@0.4.3/types/protocol.d.ts";
import { db, httpCollection } from "./db.ts";

let p= Deno.run({
    cmd:["Chromium",
        "--remote-debugging-port=9222",
        "--disable-web-security"
    ]
});

// chromeRemoteInterface.Devtools
/**
 * Sample API usage
 * 
 * The following snippet loads https://github.com and dumps every request made for 3 sec:
 */
async function test() {
  const devtools = new Devtools();
  const tab = await devtools.connectFirst("page");
  try {
    await tab.Network.enable();
    await tab.Page.enable();
    tab.Network.setRequestInterception({patterns:[{resourceType:'Document',urlPattern:"*",interceptionStage:'Request'}]})

    tab.Network.on("requestWillBeSent", (params) => {
        // console.log(params.request)
          // params.request.
    //   console.log("requestedUrl:", params.request.url);
    });
    tab.Network.on('requestIntercepted',async p=>{
await tab.Network.continueInterceptedRequest(p)   ;
let res=   await tab.Network.getResponseBodyForInterception(p);

console.log(res)

})
    const loadEventFired = tab.Page.loadEventFired();
    await tab.Page.navigate({ url: "https://github.com" });
    await loadEventFired;
    console.log("loadEventFired");
    await new Promise(r => setTimeout(r, 300000));


  } catch (e) {
    console.error(e);
  } finally {
    // tab.close();
  }
}
setTimeout(() => {
void test()
  
}, 5000);