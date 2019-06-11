# STEP 3

Here we are going to setup our API express server that is going to run in port 3000, so from now you're going to see an **gapgent-api** folder

### Installing dependencies and dev-depencies

```
npm i --save body-parser chalk debug express express-asyncify
npm i --save-dev nodemon cross-env
```

### Package.json scripts

In scripts section inside package.json, we need to put the necessary scripts for start our server in development and production mode
 ```
...
"scripts": {
  "start-dev": "cross-env DEBUG=parking:* nodemon server.js",
  "start": "node server.js"
},
...
```
Note: The cross-env package is used if you want to use this module in Windows, Linux or macOS

### Make our server run

We need to create 2 files inside gapgent-api folder:
* **server.js:** This file serves express in port 3000
* **api.js:** This file defines all the API routes we are going to request

And with this we are done with **step 3** :D

# [GO TO STEP 4](https://github.com/jegarcia28/gapgent/tree/step/4)