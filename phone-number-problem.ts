import PhoneNumberSolver from "./solver/phone-number-solver";
function main() {
  const input1 = "00-44 48 5555 8361";
  const input2 = "0 - 22 1985--324";
  const input3 = "555372654";

  const solver = new PhoneNumberSolver(input1);
  solver.run();
}
main();
