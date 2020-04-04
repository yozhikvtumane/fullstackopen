* Preparing request to https://fullstack-exampleapp.herokuapp.com/new_note_spa
* Using libcurl/7.57.0-DEV OpenSSL/1.0.2o zlib/1.2.11 libssh2/1.7.0_DEV
* Current time is 2020-04-04T21:31:32.138Z
* Disable timeout
* Enable automatic URL encoding
* Enable SSL validation
* Enable cookie sending with jar of 10 cookies
* Connection 2 seems to be dead!
* Closing connection 2
* TLSv1.2 (OUT), TLS alert, Client hello (1):
*   Trying 34.239.100.11...
* TCP_NODELAY set
* Connected to fullstack-exampleapp.herokuapp.com (34.239.100.11) port 443 (#3)
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: C:\Users\tosha\AppData\Local\Temp\insomnia_7.1.1\2017-09-20.pem
*   CApath: none
* TLSv1.2 (OUT), TLS header, Certificate Status (22):
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS change cipher, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
* ALPN, server did not agree to a protocol
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Heroku, Inc.; CN=*.herokuapp.com
*  start date: Apr 19 00:00:00 2017 GMT
*  expire date: Jun 22 12:00:00 2020 GMT
*  subjectAltName: host "fullstack-exampleapp.herokuapp.com" matched cert's "*.herokuapp.com"
*  issuer: C=US; O=DigiCert Inc; OU=www.digicert.com; CN=DigiCert SHA2 High Assurance Server CA
*  SSL certificate verify ok.

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

* upload completely sent off: 115 out of 115 bytes

< HTTP/1.1 201 Created
< Server: Cowboy
< Connection: keep-alive
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 26
< Etag: W/"1a-i19+dCmxaEJyl8vlsmVCUQvLtU8"
< Date: Sat, 04 Apr 2020 21:31:32 GMT
< Via: 1.1 vegur


* Received 26 B chunk
* Connection #3 to host fullstack-exampleapp.herokuapp.com left intact