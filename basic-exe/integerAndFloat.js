function integerAndFloat(a, b, c) {
   
        let sum = a + b + c;
        isInteger = sum % 1 === 0;
    
        if(isInteger) {
            console.log(`${sum} - Integer`);
        } else {
            console.log(`${sum} - Float`);
        }
    }
    
