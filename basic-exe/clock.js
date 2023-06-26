function clock(){
    for(let hours = 0; hours < 24; hours++) {
        for(let mins = 0; mins < 60; mins++){
        let buff = '';
        if(hours < 10){
            buff += "0" + hours;

        } else {
            buff += hours;
        }
        buff += ":";
        if(mins < 10) {
        buff += "0" + mins;
        } else {
            buff += mins;
        }

            console.log(buff);
        }
    }

}

clock()