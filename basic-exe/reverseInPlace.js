function reverseInPlace(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
       let currentEl = arr[i];
       let nextEL = arr[arr.length - 1 - i];
       arr[i] = nextEL;
       arr[arr.length - 1 - i] = currentEl;
    }
    console.log(arr.join(" "));
}