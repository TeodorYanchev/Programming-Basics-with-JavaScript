function spellcasting(input) {
  let result = input.shift();

  while (result !== "Abracadabra") {
    const [command, arg1, arg2] = result.split(" ");

    switch (command) {
      case "Adjuration":
        result = result.toUpperCase();
        break;

      case "Necromancy":
        result = result.toLowerCase();
        break;

      case "Illusion":
        const index = parseInt(arg1);
        const letter = arg2;
        if (isNaN(index) || index < 0 || index >= result.length) {
          console.log("The spell was too weak.");
        } else {
          const firstPart = result.substring(0, index);
          const secondPart = result.substring(index + 1);
          result = firstPart + letter + secondPart;
          console.log("Done!");
        }
        break;

      case "Divination":
        const firstSubstring = arg1;
        const secondSubstring = arg2;
        if (result.includes(firstSubstring)) {
          result = result.split(firstSubstring).join(secondSubstring);
        }
        break;

      case "Alteration":
        const substring = arg1;
        if (result.includes(substring)) {
          result = result.split(substring).join("");
        }
        break;

      default:
        console.log("The spell did not work!");
    }

    result = input.shift();
  }

  console.log(result);
}