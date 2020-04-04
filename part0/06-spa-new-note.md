## 0.6: sending POST request to https://fullstack-exampleapp.herokuapp.com/new_note_spa

### Diagram:  

![If image is not available check 06.png in the same folder](https://i.imgur.com/BvuGMQT.png)  

#### 1. User clicks submit button, browser creates POST request and sends it to the address https://fullstack-exampleapp.herokuapp.com/new_note_spa, in this case data payload is in JSON format:

Request header:  
```
> POST /new_note_spa HTTP/1.1
> Host: fullstack-exampleapp.herokuapp.com
> User-Agent: insomnia/7.1.1
> Content-Type: application/json
> Accept: */*
> Content-Length: 115

| {
| 	"content": "Hello from Insomnia!",
| 	"date": "Sat Apr 04 2020 23:29:21 GMT+0200 (Central European Summer Time)"
| }
```

#### 2. Server sends a success status response back to user:

Response header:  
```
< HTTP/1.1 201 Created
< Server: Cowboy
< Connection: keep-alive
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 26
< Etag: W/"1a-i19+dCmxaEJyl8vlsmVCUQvLtU8"
< Date: Sat, 04 Apr 2020 21:31:32 GMT
< Via: 1.1 vegur
```

Notes:  

	> - outgoing request  
	< - incoming response