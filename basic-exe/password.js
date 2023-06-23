function password(input) {
    let index = 0;
    let name = input[index];
    index++;

    let pass = input[index];
    index++;

    let temPassword = input[index];
    index++;

    while(pass !== temPassword) {
        temPassword = input[index];
        index++;
    }
  console.log(`Welcome ${name}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
