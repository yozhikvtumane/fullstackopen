## 0.5: requesting https://fullstack-exampleapp.herokuapp.com/spa

### Diagram:  

![If image is not available check 05.png in the same folder](https://i.imgur.com/wJBO3Af.png)  

#### 1. User follows the address https://fullstack-exampleapp.herokuapp.com/spa, browser sends GET request to the server:

Request header:  
```
> GET /spa HTTP/1.1
> Host: fullstack-exampleapp.herokuapp.com
> User-Agent: insomnia/7.1.1
> Accept: */*
```

#### 2. Server sends the response back to user, in this case it's an HTML document:

Response header:  
```
< HTTP/1.1 200 OK
< Server: Cowboy
< Connection: keep-alive
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 406
< Etag: W/"196-iXS41cbdz6kvKWqp0OOP4SQ4EgM"
< Date: Sat, 04 Apr 2020 21:41:44 GMT
< Via: 1.1 vegur
```

Notes:  

	> - outgoing request  
	< - incoming response