<!DOCTYPE html>
  <html>
  <head>
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

  </head>
<body>
	<h3 style = "background-color: blue;" onmouseover="hackerman()"> JS Test: Type your username and password! </h3>
        <input type = "text" onkeypress= "hackerman()"> 
	<button onclick= "hackerman()"> Login </button>
	
	<h1 id = "headingII"> Java SQL </h1>
	<h1 class = "headingIII"> Python </h1>
	<h1 id = "headingIIII"> HTML Javascript CSS </h1>
	<button onclick = "testing_statement()"> In Progress: C++ Linux C# </button>

<h1 id = "double"> Product: 1 </h1> 
<button> Click to double </button>
	
  </body>
</html>
