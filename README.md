# STEP 2

Now, we need to handle request from dialogflow and also send request to our custom API if needed.

### Creating a class

With Ecmascript2016 we can create classes, so lets do it!. First of all, we create a class folder with an [index.js](https://github.com/jegarcia28/gapgent/tree/step/2) file inside. Inside it, we are going to have 2 methods. One to send requests to our custom API and another to parse dates


### Handle dialogflow requests

In our [proxy.js](https://github.com/jegarcia28/gapgent/blob/step/2/gapgent-web/proxy.js) file, we are going to have one POST route that is going to be requested from dialogflow fulfillment when needed:

 ```
api.post('/gapgent', (req, res, next) => {
  ...
})
```
Inside that request, we are going to handle all the actions we need.

### Create flows validations

If we want to add our own business logic, we need to handle dialogflow request and parameters and send them to our custom API when needed. Inside **flows** folder you are going to find 3 files:
*  [assignSpot.js](https://github.com/jegarcia28/gapgent/blob/step/2/gapgent-web/flows/assignSpot.js): Handles flow to assign a free spot
*  [freeSpot.js](https://github.com/jegarcia28/gapgent/blob/step/2/gapgent-web/flows/freeSpot.js): Handles flow to free an spot for a given date
*  [searchSpot.js](https://github.com/jegarcia28/gapgent/blob/step/2/gapgent-web/flows/searchSpot.js): Handles flow to search for a free spot in a given date.

Then, if you go back to **proxy.js** file, you'll find all the require for these files.

### Last but not least...

We have a config folder with an [index.js](https://github.com/jegarcia28/gapgent/blob/step/2/gapgent-web/config/index.js) that contains an exported json with one key: our endpoint URL.

And with this we are done with **step 2** :D

# [GO TO STEP 3](https://github.com/jegarcia28/gapgent/tree/step/3)