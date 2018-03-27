var express = require('express'),
cors = require('cors'),
app = express(),
port = process.env.PORT || 5000,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:'http://127.0.0.1:8080'}));

var routes = require('./api/routes/albumRoutes');
routes(app);

app.listen(port);

console.log('AlbumSlideshow API server started on: ' + port);