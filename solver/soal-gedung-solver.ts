class SoalGedungSolver {
  private input: string;
  constructor(input: string) {
    this.input = input;
  }
  public run() {
    const cleanedInput: string[] = this.cleanInput(this.input);
    const castedInput: number[] = this.castInputToNumber(cleanedInput);
    const cases: number[][] = this.getCases(castedInput);
    const totalCases = castedInput[0];
    if (totalCases != cases.length) {
      console.log("jumlah case yang tersedia tidak mencukupi");
      return;
    }
    for (let i = 0; i < cases.length; i++) {
      const case_ = [...cases[i]];
      this.sortDecrease(case_);
      //count total color change
      const totalChange = this.countTotalColorChange(case_);
      console.log(totalChange);
    }
  }

  private castInputToNumber(input: string[]): number[] {
    let res: number[] = [];
    for (let i = 0; i < input.length; i++) {
      const val = Number(input[i]);
      if (!Number.isNaN(val)) {
        res.push(val);
      }
    }
    return res;
  }

  private cleanInput(input: string): string[] {
    const res: string[] = [];
    const n = input.length;

    for (let i = 0; i < n; ) {
      if (input[i] === " ") {
        i++;
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
  private getCases(cleanedInput: number[]): number[][] {
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
  private sortDecrease(arr: number[]) {
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

  private countTotalColorChange(arr: number[]): number {
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
}
export default SoalGedungSolver;
