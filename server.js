var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

app.use(history({
  // verbose: true
}));

app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});