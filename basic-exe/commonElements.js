function commonElements(firstArray, secondArray) {
  // for(let index = 0; index < firstArray.length; index++)  {
  //     let currentEl = firstArray[index];

  //     if(secondArray.includes(currentEl)) {
  //       console.log(currentEl);
  //     }
  // }
  for (let el of firstArray) {
    if(secondArray.includes(el)){
      console.log(el);
    }
  }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
)