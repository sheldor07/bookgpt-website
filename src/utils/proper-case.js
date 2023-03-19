// write a function to take a string and return a string with the first letter capitalized and remove any "-" and replace it with a space and make the next letter capitalised
function properCase(str) {
  return str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
module.exports = {properCase};