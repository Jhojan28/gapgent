# STEP 1

Here we are going to setup our express server that is going to run in port 8080.

### Installing dependencies and dev-depencies

```
npm i --save body-parser chalk debug express express-asyncify request request-promise-native
npm i --save-dev nodemon
```

### Package.json scripts

In scripts section inside package.json, we need to put the necessary scripts for start our server in development and production mode

 ```
...
"scripts": {
  "start": "node server.js",
  "start-dev": "nodemon server.js"
},
...
```

### Make our server run

We need to create 2 files:
* **server.js:** This file serves express in port 8080
* **proxy.js:** This file defines a route that we are going to see later

And with this we are done with **step 1** :D

# [GO TO STEP 2](https://github.com/jegarcia28/gapgent/tree/step/2)