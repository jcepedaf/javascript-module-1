function getMood(estado) {
  if (estado === "happy") {
    return "Good job, you're doing great!";
  } else if (estado === "sad") {
    return "Every cloud has a silver lining";
  } else if (typeof estado === "number") {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}
console.log(getMood("happy"));
