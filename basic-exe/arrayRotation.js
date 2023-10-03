function arrayRotation(arr, rotations) {
    
    for(let index = 0; index < rotations; index++) {
         let firstElement = arr.shift();
         arr.push(firstElement);        
    }
    console.log(arr.join(' '));
}