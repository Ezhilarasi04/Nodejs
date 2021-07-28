var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var number1;
  var number2;
  var result = 0;
  
  var address = req.url;
  var q = url.parse(address, true);

  var values = q.query;
  // var x = values.number1;
  // var y = values.number2;
  var num1 = Number(values.number1);
  var num2 = Number(values.number2);

  var operation = q.pathname;
  var op = String(operation);

  if (op == '/add')
  {
    result = num1+num2;
    //console.log(result1);
    //res.write(String(result));
  }
  else if (op == '/subtract')
  {
    result = num1-num2;
    //res.write(String(result));
  }
  else if (op == '/multiply')
  {
    result = num1*num2;
    //res.write(String(result));
  }
  else if (op == '/divide')
  {
    result = num1/num2;
    //res.write(String(result));
  }
  else 
  {
    res.write("not valid");
  }
  res.write(String(result));
  res.end();
}).listen(8081)


