const arg = process.argv[2]; // Get the first argument
const num = Number(arg);     // Convert to number

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}