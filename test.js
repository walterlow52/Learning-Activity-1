<!DOCTYPE html>
  <html>
  <head>
	<meta charset = "UTF-8">
		<script>
		document.addEventListener('DOMContentLoaded', function() {
		document.querySelector('#form').onsubmit = function() {
		alert(document.querySelector("#message").value); }
		document.querySelector("abutton").onclick = function() {
		let message = document.querySelector("#message").value
		alert(`${message} smileyface` )
		}
	})
</script>
  <script>
     alert('HELLO USER! YOUR COMPUTER IS BEING HACKED! PLEASE HIT THE BLUE BUTTON TO CLEAN YOUR PC.')
  </script>

<script type = "text/javascript"> 
	function testing_statement() {
	document.queryselector("h1").innerHTML = "TEST";
	document.queryselector("#headingII").innerHTML = "This is a test";
	document.queryselector(".headingIII").innerHTML = "I repeat, this is a test";
	document.queryselector("#headingIIII").innerHTML = "<span style ='color:red'> Test test one two check check </span>"
}

<script type = "text/javascript">
	document.addEventListener('DOMContentLoaded', function() {
	document.queryselector("button").onclick = inc;
}
)

let counter = 0
function inc() {
	counter = counter * 2;
	document.queryselector("#double").innerHTML = `Product: ${counter}`;
	
if (counter >= 1048576) {
	counter = 0
	document.queryselector("#double").innerHTML = "That's enough. You probably don't know how much times you clicked that button."
}
}

<script>

        document.addEventListener('DOMContentLoaded', function(){

            document.querySelector('#red').onclick = function() {
                document.querySelector('#style_me').style.color = 'red';
            }

            document.querySelector('#white').onclick = function() {
                 document.querySelector('#style_me').style.color = 'white';
            }

            document.querySelector('#blue').onclick = function() {
                document.querySelector('#style_me').style.color = 'blue';
            }

            document.querySelector('#left').onclick = function() {
                document.querySelector('#style_me').style.cssFloat = 'left';
            }

            document.querySelector('#right').onclick = function() => {
                 document.querySelector('#style_me').style.cssFloat = 'right';
            }
        })
      </script>
<body>
<form id = "form">
	<input id = "message" type = "text"/>
	<button id = "abutton"> </button>
        <input type = "submit">
</form>
	  
const nice = 69;
const dope = 420;
var party = 100;
console.log(party/2);
let nice_party = nice*party;
console.log(nice_party)

const square = new Object();
square.dope = 15;
square.area = function() {
	return this.dope*this.dope;
}
console.log(square.area());

let a = 20;
let b = "20";
if (a == b) {
	console.log("You've reached your limit")
} else {
	console.log("Continue") }
console.log(a)
console.log(b)

var oof = ["potato", "call of duty", 22, true, function() {
	console.log("We are testing an array now")
}
	   ];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

	<h3 style = "background-color: blue;" onmouseover="hackerman()"> JS Test: Type your username and password! </h3>
        <input type = "text" onkeypress= "hackerman()"> 
	<button onclick= "hackerman()"> Login </button>
	
	<h1 id = "headingII"> Java SQL </h1>
	<h1 class = "headingIII"> Python </h1>
	<h1 id = "headingIIII"> HTML Javascript CSS </h1>
	<button onclick = "testing_statement()"> In Progress: C++ Linux C# </button>

<h1 id = "double"> Product: 1 </h1> 
<button> Click to double </button>

<h1 id="style_me"> Color me</h1>
    <div>
      <div>
        <button id='red'> Red</button>
        <button id='white'> Green </button>
        <button id='blue'> Blue </button>
      </div>
      <div>
        <button id='left'> Left Align </button>
        <button id='right'> Right Align </button>
      </div>
  </div>
	
  </body>
</html>
