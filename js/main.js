const express = require('express'),
      bodyParser = require('body-parser'),
      request = require('request'),
      path = require('path'),
      app = express(),
      port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

/// Creating post route
app.post('/', (req, res) => {
   const crypto = req.body.crypto,
         fiat = req.body.fiat;

   request('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', (err, res, body) => {
       console.log(res.body);
   });

});

