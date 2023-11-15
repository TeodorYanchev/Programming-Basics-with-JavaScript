function nxNMatrix(n) {

    // function rowGenerator() {
    //     let row = '';

    //     for (let j = 1; j <= n; j++ ){
    //      row += `${n} `
    //     }
    //     return row;
    // }
    
    // for (let i = 1; i <= n; i++) {
    //    console.log(rowGenerator());
    // }
    for(let rowNum = 1; rowNum <= n; rowNum++){
    let curRow = `${n} `.repeat(n);
    console.log(curRow);
    }
}

nxNMatrix(3)