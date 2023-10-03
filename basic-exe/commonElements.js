function commonElements(firstArray, secondArray) {
    for(let index = 0; index < firstArray.length; index++)  {
        let currentEl = firstArray[index];

        if(secondArray.includes(currentEl)) {
          console.log(currentEl);
        }
    }
}