function chooseElement(value){
	$(".assignment1").hide();
	$(".assignment2").hide();
	$(".assignment3").hide();
	$(".assignment4").hide();
	$(".assignment5").hide();
	$(".assignment6").hide();
	$(".assignment7").hide();
	$(".assignment8").hide();
	$(value).show();
		
}

function additionOddArray(){
	var number1=$(".additioninput1")[0].valueAsNumber;
	var number2=$(".additioninput2")[0].valueAsNumber;
	/*for(i=number1; i<number2; i++){
		if(i%2!=0){
			count+=i;
		}
	}*/
	var count=additionOdd(number1,number2);
	$(".result").html(count);
}

function arithmeticMean(){
	var firstnumber=$(".additioneven1")[0].valueAsNumber;
	var secondnumber=$(".additioneven2")[0].valueAsNumber;
	/*for(i=firstnumber;i<secondnumber;i++){
		if(i%2==0){
		count+=i;
		}
	}*/
	var count=arithmeticMean1(firstnumber,secondnumber);
	$(".result1").html(count);
}


function factorialRecursive(){
	var onenumber=$(".factorialrec")[0].valueAsNumber;
	
	var resultoffactorial = recursiveFactorial(onenumber);
	$(".result2").html(resultoffactorial);
}

function factorialIterative(){
	var firstnumber=$(".factorialit")[0].valueAsNumber;
	
	var resultofitfact = factorialIt(firstnumber);
	$(".result3").html(resultofitfact);
}

function combinationsFactorial(){
	var n=$(".comfact1")[0].valueAsNumber;
	var k=$(".comfact2")[0].valueAsNumber;
	
	var resultofcomfact = combinationsFact(n,k);
	$(".result4").html(resultofcomfact);
}

function combinations(){
	var n=$(".com1")[0].valueAsNumber;
	var k=$(".com2")[0].valueAsNumber;
	
	var resultofcombinat = combinations1(n,k);
	$(".result5").html(resultofcombinat);
}

var newArray = [];
function createArray(){
	var numberArray = $(".n1")[0].valueAsNumber;
	newArray.push(numberArray);
	numberArray = newArray.join();
	
	var listProperties = newArray;
	$(".result61").html(listProperties);
	console.log(newArray);
}

function sort(){
	var radioValue = $("input[name='sort1']:checked").val();
	var resultofsort = sortArr(newArray,radioValue);
	$(".result6").html(resultofsort);
	
	
}


	




	
	
	
	
	



	
