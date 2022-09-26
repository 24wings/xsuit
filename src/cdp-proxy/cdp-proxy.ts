import puppeteer, { EventType } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { httpCollection } from "./db.ts";
import { HttpSchema } from "./schema.ts";

const browser = await puppeteer.launch({headless:false});
// browser.on(EventType)
const page = await browser.newPage();
page.on('response',async r=>{
    const request=r.request();
    const response_type=r.headers()['content-type'];
    let res_str='';
    if(response_type){
        if(response_type.indexOf('json')!=-1){
            res_str=await r.json();
    
        }else{
         res_str=   await r.text();
        }
    }else{
        res_str=   await r.text();
    }
   

   const url= new URL(request.url());
    const httpSchema:HttpSchema={
        host:url.host,
        url:request.url(),
        req:{
            headers:r.request().headers(),
            method:r.request().method(),
            url:r.request().url(),
            body:request.postData()||'',
            
        },
        res:{
            content_type:response_type,
            headers:r.headers(),
            status:r.status(),
            statusText:r.statusText(),
            response_str:res_str,
        }
    }
  await  httpCollection.insertOne(httpSchema);
    console.log(httpSchema)
})
await page.goto("https://www.baidu.com");
// await page.screenshot({ path: "example.png" });
// await new Promise()
setInterval(()=>{},1000)
// await browser.close();