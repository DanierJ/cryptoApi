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

   /// Requesting to an external api
   request('https://apiv2.bitcoinaverage.com/indices/global/ticker/' + crypto + fiat, (err, response, body) => {
       const bitInfo = JSON.parse(response.body),
             currentDate = bitInfo.display_timestamp;/*,
             {open} = bitInfo,
             {hour} = open;
       console.log(open);
       console.log(hour);*/

       // For more than one response to browser
       res.write(`<p>The current date is ${currentDate}</p>`);

       // Last thing you wanna do
       res.write(`<h1>The current price of ${crypto} the bitcoin is ${bitInfo.last} ${fiat}`);

       res.send();

   });

});

