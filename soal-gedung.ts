import SoalGedungSolver from "./solver/soal-gedung-solver";
function main() {
  let input = "2 5 7 -2 6 9 -3 8 11 -9 2 5 18 17 -15 4";
  const solver = new SoalGedungSolver(input);
  solver.run();
}

main();
