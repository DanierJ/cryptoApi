const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express(),
      port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

