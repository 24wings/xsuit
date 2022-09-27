

interface Http{
url:string;
}
export class Report{

    reportHttp(http:Http){
        this.markdown(`# ${http.url}`);


    }
    markdown(content:string){
        Deno.writeTextFileSync('a.md',content);
    }
}



new Report().reportHttp({url:'https://www.baidu.com'})