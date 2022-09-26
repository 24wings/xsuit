export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export interface RequestSchema{
    /**
     * Request URL (without fragment).
     */
     url: string;
  
     /**
      * HTTP request method.
      */
     method: string;
     /**
      * HTTP request headers.
      */
     headers:Record<string,string>;
     /**
      * HTTP POST request data.
      */
     postData?: string;
     /**
      * True when the request has POST data. Note that postData might still be omitted when this flag is true when the data is too long.
      */
     hasPostData?: boolean;
     body:string;
}

export interface ResponseSchema{
     /**
      * HTTP response status code.
      */
     status: number;
     /**
      * HTTP response status text.
      */
     statusText: string;
     /**
      * HTTP response headers.
      */
      headers:Record<string,string>;
     /**
      * HTTP response headers text. This has been replaced by the headers in Network.responseReceivedExtraInfo.
      */
     headersText?: string;
    response_str:string;
    
    
     /**
      * Protocol used to fetch this request.
      */
     protocol?: string;
     content_type:string;
    
}

export interface HttpSchema{
    req:RequestSchema;
    res:ResponseSchema;
    host:string;
    url:string;
}