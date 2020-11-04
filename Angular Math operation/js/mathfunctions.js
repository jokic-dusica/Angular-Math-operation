
function additionOdd(number1,number2){
	var count = 0;
	for(i=number1; i<number2; i++){
		if(i%2!=0){
			count+=i;
		}
	}
	return count;
}


function arithmeticMean1(firstnumber,secondnumber){
	var count=0;
	for(i=firstnumber;i<secondnumber;i++){
		if(i%2==0){
		count+=i;
		}
	}
	return (count/(secondnumber-firstnumber));
}

function recursiveFactorial(onenumber){
	if(onenumber<0)
		return -1;
	else if(onenumber==0)
		return 1;
	else{
		return (onenumber * recursiveFactorial(onenumber-1));
	}
}

function factorialIt(firstnumber){
	var result=1;
	if(firstnumber==1 || firstnumber==0){
		return 1;
	}
	for(var i=2;i<=firstnumber;i++){
		result*=i;
	}
	
	return result;
}

function combinationsFact(n,k){
	if ((typeof n !== 'number') || (typeof k !== 'number')) 
		return "Mora biti broj";

	if (k < n)
		return "Vrednost drugog parametra mora biti veca od prvog";
	
	if (n < 0 || k < 0)
		return "Unesite broj veci od nule";

	return factorialIt(n)/factorialIt(k)*factorialIt(n-k);

}

function combinations1(n,k){
	if ((typeof n !== 'number') || (typeof k !== 'number'))
		return false;
	else{
		return factorialIt(n)/factorialIt(k) * factorialIt(n-k);
	}
}

function sortArr(numberArray,sortOption) {
	
	if(sortOption == "incs" || sortOption == isNaN()){
		return sortIncs(numberArray);
	}
	return sortDesc(numberArray);
		
	
}

function sortDesc (numberArray){
	var temp = 0;
	for(i=0;i<numberArray.length-1;i++){
		for(j=i+1;j<numberArray.length;j++){
			if(numberArray[i]<numberArray[j]){
				temp = numberArray[i];
				numberArray[i] = numberArray[j];
				numberArray [j] = temp;
			}
		}
	}
	return numberArray;
}

function sortIncs(numberArray){
	var temp = 0;
	for(i = 0;i<numberArray.length-1;i++){
		for(j=i+1;j<numberArray.length;j++){
			if(numberArray[i]>numberArray[j]){
				temp = numberArray[i];
				numberArray[i] = numberArray[j];
				numberArray[j] = temp;
			}
		}
	}
	
	return numberArray;
}
	
	
function sortObject1(objectList, propertyName, isDesc){
	var temp = 0;
	for(i=0; i<objectList.length-1; i++){
		for(j=i+1; j<objectList.length; j++){
			if(isDesc){
				if (objectList[i][propertyName] < objectList[j][propertyName]){
					temp = objectList[i][propertyName];
					objectList[i][propertyName] = objectList[j][propertyName];
					objectList[j][propertyName] = temp;
				}
			}else{
				if(objectList[i][propertyName] > objectList[j][propertyName]){
					temp = objectList[i][propertyName];
					obejctList[i][propertyName] = objectList[j][propertyName];
					objectList[j][propertyName] = temp;
				}
			}
		}
	}
	return objectList;
}
					
			
	
				

	
	
	
			
		
	
		


