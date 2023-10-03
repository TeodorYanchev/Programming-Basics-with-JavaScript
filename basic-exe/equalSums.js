function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrayLength = arr.length;

    for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {

        for (let i = 0; i < arrayLength; i++) {

            if (i !== currentIndex) {
                let num = Number(arr[i]);

                if (i < currentIndex) {
                    leftSum += num;
                } else if (i > currentIndex) {
                    rightSum += num;
                }
            }

            if (currentIndex === 0) {
                leftSum = 0;
            } else if (currentIndex === arrayLength - 1) {
                rightSum = 0;
            }

        }

        if (leftSum === rightSum) {
            console.log(currentIndex);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}