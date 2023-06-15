function pipesInPool(input){
    const volume = Number(input[0]);
    const pipe1FlowRate = Number(input[1]);
    const pipe2FlowRate = Number(input[2]);
    const hoursAbsent = Number(input[3]);

    const waterFilled = (pipe1FlowRate * hoursAbsent) + (pipe2FlowRate * hoursAbsent);
    const percentFilled = (waterFilled / volume) * 100;

    if (waterFilled <= volume) {
        const percentPipe1 = (pipe1FlowRate * hoursAbsent) / waterFilled * 100;
        const percentPipe2 = (pipe2FlowRate * hoursAbsent) / waterFilled * 100;

        return `The pool is ${percentFilled.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%.`;
    } else {
        const overflow = waterFilled - volume;
        return `For ${hoursAbsent.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`;
    }
}

pipesInPool(["1000",
"100",
"120",
"3"]);
