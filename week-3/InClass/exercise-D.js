function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }
  
  const pasarMayusculas = (nombres) =>
    nombres.sort().map((name) => name.toUpperCase());
  
  console.log(magician(pasarMayusculas));
  