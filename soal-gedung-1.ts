function cleanInput(input: string): string[] {
  const res: string[] = [];
  const n = input.length;

  for (let i = 0; i < n; ) {
    if (input[i] === " ") {
      continue;
    }

    let val = "";
    if (input[i] === "-") {
      val += "-";
      i++;
    }

    while (i < n && input[i] !== " ") {
      val += input[i];
      i++;
    }

    res.push(val);
  }

  return res;
}
function castInputToNumber(input: string[]): number[] {
  let res: number[] = [];
  for (let i = 0; i < input.length; i++) {
    const val = Number(input[i]);
    res.push(val);
  }
  return res;
}

function getCases(cleanedInput: number[]): number[][] {
  const res: number[][] = [];
  const n = cleanedInput.length;

  let i = 1;

  while (i < n) {
    const total = cleanedInput[i];
    const caseFloor: number[] = [];

    for (let j = 0; j < total && i + 1 + j < n; j++) {
      caseFloor.push(cleanedInput[i + 1 + j]);
    }

    res.push(caseFloor);

    i = i + 1 + total;
    if (total != caseFloor.length) {
      console.log(
        "jumlah lantai yang tersedia tidak sama dengan case yang diberikan"
      );
      return [];
    }
  }

  return res;
}
function sortDecrease(arr: number[]) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;
    let maxAbs = arr[i] < 0 ? -arr[i] : arr[i];

    for (let j = i + 1; j < n; j++) {
      const absJ = arr[j] < 0 ? -arr[j] : arr[j];
      if (absJ > maxAbs) {
        maxAbs = absJ;
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
}

function countTotalColorChange(arr: number[]): number {
  let total = 1;
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    const prev = arr[i - 1];
    /*
    jika saat ini bilangan + dan sebelum nya -
    atau saat ini bilangan - dan sebelumnya +
    maka total bertambah 1(karena terjadi perubahan warna)
    */
    if ((curr > 0 && prev < 0) || (curr < 0 && prev > 0)) {
      total++;
    }
  }
  return total;
}
function run(input: string) {
  const cleanedInput: string[] = cleanInput(input);
  const castedInput: number[] = castInputToNumber(cleanedInput);
  const cases: number[][] = getCases(castedInput);
  const totalCases = castedInput[0];
  if (totalCases != cases.length) {
    console.log("jumlah case yang tersedia tidak mencukupi");
    return;
  }
  for (let i = 0; i < cases.length; i++) {
    const case_ = cases[i];
    sortDecrease(case_);
    //count total color change
    const totalChange = countTotalColorChange(case_);
    console.log(totalChange);
  }
}

function main() {
  const input = "2 5 7 -2 6 9 -3 8 11 -9 2 5 18 17 -15 4";
  console.log(cleanInput(input));
  //     const cleanedInput = cleanInput(input);
  //     const castedInput = castInputToNumber(cleanedInput);
  //     const cases = getCases(castedInput);
  //     console.log(cases);
  // run(input);
}

main();
