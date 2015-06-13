# ioMagician Frontend

The frontend is using the Angular Material Design (have a look here [AngularJS Material](http://material.angularjs.org/)) 
and is build up on this Angular Material seed project:  [Seed Project](https://github.com/angular/material-start)

### Running the App during Development

The angular-seed project comes pre-configured with a local development web server.  It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
sudo npm install -g live-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd app
live-server
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.