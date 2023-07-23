while (true) {
  let INPUT = prompt("INPUT:<VARIABLE A> <MATH TYPE> <VARIABLE B>");

  let RESULT;
  let INPUTparts = [];
  let j = 0;
  let start = 0;

  for (let i = 0; i < INPUT.length; i++) {
    if (INPUT[i] != " ") {
      INPUTparts[j] = INPUT.slice(start, i + 1);
    } else {
      start = i;
      j++;
    }
  }

  let mathTYPE = INPUTparts[1].replace(" ", "");
  switch (mathTYPE) {
    case "+":
      RESULT = BigInt(INPUTparts[0]) + BigInt(INPUTparts[2]);
      alert(RESULT);
      break;
    case "*":
      RESULT = BigInt(INPUTparts[0]) * BigInt(INPUTparts[2]);
      alert(RESULT);
      break;
    default:
      alert("WRONG MATH TYPE");
  }
}
