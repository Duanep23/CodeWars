function removeSmallest(numbers) {
  
  var currentLowestNumber = numbers[0];
  var newListOfNumbers = numbers;
  var empty = [];
  var foundDuplicate = false;
  
if (numbers.length <= 1)
{
  return empty;
}
else
{
  for (var i = 0; i < newListOfNumbers.length; i++)
  {      
    if (currentLowestNumber > newListOfNumbers[i])
    {
      currentLowestNumber = newListOfNumbers[i];
    }
  }  
  
  console.log(currentLowestNumber);

  for (var i = 0; i < newListOfNumbers.length; i++)
  {      
    for (var j = 0; j < newListOfNumbers.length; j++)
    {
      if (j != i && newListOfNumbers[j] == currentLowestNumber)
      {
        newListOfNumbers.splice(j, 1);
        foundDuplicate = true;
     	break;
      }
    }
    break;    
  }

  console.log(foundDuplicate)

  if (foundDuplicate == false)
  {
  	  newListOfNumbers.splice(newListOfNumbers.indexOf(currentLowestNumber), 1);
  }
  
  return newListOfNumbers;
  }
}
