function passwordReset(input) {
    let text = input.shift();
    input.pop();
 
    for (let line of input) {
        let [action, ...info] = line.split(' ');
        switch (action) {
            case 'TakeOdd':
                let newPassword = '';
                let oldPasswordLength = text.length;
                for (let i = 0; i < oldPasswordLength; i++) {
                    if (i % 2 !== 0) {
                        newPassword += text[i];
                    }
                }
                text = newPassword;
                console.log(text);
                break;
            case 'Cut':
                let [index, length] = info.map(Number);
                let substring = text.slice(index, index + length);
                text = text.replace(substring, '');
                console.log(text);
                break;
            case 'Substitute':
                let [substr, substitude] = info;
                if (text.includes(substr)) {
                    while (text.includes(substr)) {
                        text = text.replace(substr, substitude);
                    }
                    console.log(text);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }
    }
    console.log(`Your password is: ${text}`)
}