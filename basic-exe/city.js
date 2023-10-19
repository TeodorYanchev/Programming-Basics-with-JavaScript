function city(obj) {
    for(let key of Object.keys(obj)) {
      console.log(`${key} -> ${obj[key]}`);
    }
}