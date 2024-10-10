function Solve(val) 
{
	var v = document.getElementById('result');
	v.value += val;
 }
 function Result() 
 {
	var number1 = document.getElementById('result').value;
	try {
	   var number2 = eval(number1.replace('x', '*'));
	   document.getElementById('result').value = number2;
	} 
	catch {
	   document.getElementById('result').value = 'INCORRECT';
	}
 }
 function Clear()
  {
	
	document.getElementById('result').value='';
	
 }
 function Back() 
 {
	var e = document.getElementById('result');
	e.value = e.value.slice(0, -1);
 }
 document.addEventListener('keydown', function (event) {
	const key = event.key;
	const Keys = '0123456789+-*/.%';
	if (Keys.includes(key)) {
	   Solve(key === '*' ? 'x' : key);
	} else if (key === 'Enter') {
	   Result();
	} else if (key === 'Back') {
	   Back();
	} else if (key.toLowerCase() === 'clear') {
	   Clear();
	}
 });