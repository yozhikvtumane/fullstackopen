
## 0.4: new note

### Diagram:  

![If image is not available chack 04.png in the same folder](https://i.imgur.com/sLO9KZN.png)  

#### 1. User clicks submit button and the POST request in form of x-www-form-urlencoded is sent from user's browser to server to the address https://fullstack-exampleapp.herokuapp.com/new_note

Request header:  
```
> POST /new_note HTTP/1.1 
> Host: fullstack-exampleapp.herokuapp.com
> User-Agent: insomnia/7.1.1
> Content-Type: application/x-www-form-urlencoded
> Accept: */*
> Content-Length: 27
> Data payload note=test%20from%20Insomnia
```

#### 2. Server sends the response back to user, in this case it's a command to redirect to the https://fullstack-exampleapp.herokuapp.com/notes address:

Response header:  
```
< HTTP/1.1 302 Found
< Server: Cowboy
< Connection: keep-alive
< X-Powered-By: Express
< Location: /notes
< Vary: Accept
< Content-Type: text/plain; charset=utf-8
< Content-Length: 28
< Date: Sat, 04 Apr 2020 20:45:07 GMT
< Via: 1.1 vegur
```
#### 3. User's browser recieves the redirect command on the given address and sends GET request to https://fullstack-exampleapp.herokuapp.com/notes

Request header:  
```
> GET /notes HTTP/1.1
> Host: fullstack-exampleapp.herokuapp.com
> User-Agent: insomnia/7.1.1
> Content-Type: application/x-www-form-urlencoded
> Accept: */*
```
#### 4. Server respondes with the requested content in form of HTML document:

Response header:  
```
< HTTP/1.1 200 OK
< Server: Cowboy
< Connection: keep-alive
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 405
< Date: Sat, 04 Apr 2020 20:45:07 GMT
< Via: 1.1 vegur
```
Notes:  

	> - outgoing request  
	< - incoming response