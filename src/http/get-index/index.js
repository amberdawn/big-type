// Learn how to use secure sessions, middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

// TODO: modify the body object!
let body = `
<!DOCTYPE html>
<html>
<head>
<title>

&hearts; ilbt &hearts;

</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="https://use.typekit.net/iay6fpi.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<link type="text/css" rel="stylesheet" href="public/css/swirly.css">
<link href="/webfonts/ss-social-regular.css" rel="stylesheet" />
<link href="/webfonts/ss-standard.css" rel="stylesheet" />

<script language="JavaScript">

var links = new Array(10)
links[0] = "index.html"
links[1] = "index.html"
links[2] = "paint.html"
links[3] = "index.html"
links[4] = "paint.html"
links[5] = "index.html"
links[6] = "index.html"
links[7] = "index.html"
links[8] = "paint.html"
links[9] = "index.html"
links[10] = "paint.html"
function go() {
var a = 1+Math.round(Math.random()*10)
var i = a
location = links[i]
}

</script>




</head>

<body>
  <div class="type">
I like big type &amp; I cannot lie.
</div>



<div class="footer">

<div class="footer-left">
<div class="typeface">
Typeface: <a href="https://typekit.com/fonts/corner-store-jf">Corner Store</a> by <a href="https://www.jukeboxfonts.com/">Jukebox Fonts</a>
</div>
<div class="background">
Background: <a href="https://www.youworkforthem.com/graphic/E0233/fenwick-infinityland-01">Infinity Land</a> by <a href="http://rfstudio.ca/">Ray Fenwick</a>
</div>
</div>

<div class="footer-right">
<div class="twitter">
<a href="http://twitter.com/ilikebigtype" class="ss-icon ss-social-regular">twitter</a>

</div><a href="javascript:go()">
<div class="button">
<span class="ss-icon">refresh</span> New style
</div>
</a>
</div>


</div>




</body>
</html>
`

exports.handler = async function http(req) {
  console.log(req)
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

// Example responses

/* Forward requester to a new path
exports.handler = async function http(req) {
  return {
    status: 302,
    location: '/about',
  }
}
*/

/* Respond with successful resource creation, CORS enabled
exports.handler = async function http(req) {
  return {
    status: 201,
    type: 'application/json',
    body: JSON.stringify({ok: true}),
    cors: true,
  }
}
*/

/* Deliver client-side JS
exports.handler = async function http(req) {
  return {
    type: 'text/javascript',
    body: 'console.log("Hello world!")',
  }
}
*/

