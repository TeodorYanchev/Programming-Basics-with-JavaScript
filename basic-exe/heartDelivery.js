function examPrep(arr) {
 
    let firstLine = arr.shift().split('@');
    let nextLine = arr.shift();
    let total = 0;
 
    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);
 
        if (total > firstLine.length - 1) {
            total = 0;
        }
 
        if (firstLine[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);
 
            }
        }
        nextLine = arr.shift();
 
    }
 
    console.log(`Cupid's last position was ${total}.`);
 
    let resultArr = [];
    let resultFlag = true;
 
    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);
        }
    });
 
    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }
 
}