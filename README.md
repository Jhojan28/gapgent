# STEP 4

Here we are going to setup our database. In this case I used MySQL with sequelize ORM, so from now, you are going to see a **gapgent-db** folder

### Installing dependencies
```
npm i --save chalk debug defaults inquirer minimist mysql2 sequelize
```

### Package.json scripts

In scripts section inside package.json, we need to put the necessary scripts for generate our database with the models we defined
 ```
...
"scripts": {
  "setup": "node setup.js --yes"
},
...
```

### Creating models

Inside models folder, we are going to define all the tables with its fields. In this case we have 3:
* [assign.js](https://github.com/jegarcia28/gapgent/blob/step/4/gapgent-db/models/assing.js)
* [parking.js](https://github.com/jegarcia28/gapgent/blob/step/4/gapgent-db/models/parking.js)
* [user.js](https://github.com/jegarcia28/gapgent/blob/step/4/gapgent-db/models/user.js)


### Creating datababase "queries"

In [lib](https://github.com/jegarcia28/gapgent/tree/step/4/gapgent-db/lib) folder, we are going to create functions to handle data in our models (Create, Update, Search, Delete), all with [Sequelize](http://docs.sequelizejs.com/) ORM. We also have a [db.js](https://github.com/jegarcia28/gapgent/blob/step/4/gapgent-db/lib/db.js) file, that its going to create a database conection with a config json we need to send.


### Creating database

In our [index.js](https://github.com/jegarcia28/gapgent/blob/step/4/gapgent-db/index.js) file, we are going to import models and lib files to generate relations between tables, but this file is not going to work if we don't send a config json with our:

* MySQL user
* MySQL password
* MySQL database name

That's why we create a [setup.js](https://github.com/jegarcia28/gapgent/blob/step/4/gapgent-db/setup.js) file that calls index.js, sending this configuration options.

### Lastly

In Fixture folder, you can find a file with some queries.


And with this we are done with **step 4** :D

# [GO TO FINAL STEP!!](https://github.com/jegarcia28/gapgent/tree/step/final)