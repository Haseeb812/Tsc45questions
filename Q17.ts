let gustList = ["Ali", "Hurr", "Haseeb"];
let dontCome = gustList[0];
console.log(dontCome, "is never come");
gustList.splice(0, 1, "Eava");
console.log(
  "Good news ! We Have found a bigger dinner table, so now more space is available"
);
gustList.unshift("Ali Khan");
gustList.push("Haris");
let middleIndex: number = Math.floor(gustList.length / 2);
gustList.splice(middleIndex, 0, "Iqbal");
gustList.forEach((oneGuest) =>
  console.log(`Hi ${oneGuest}, Would you like to diner with me?`)
);
