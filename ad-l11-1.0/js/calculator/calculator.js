const add = (a, b) => a + b
const subtract = (a, b) => a - b
const divide = (a, b) => {
  if(b === 0){
    return "No se puede dividir entre 0"
  }
  return a / b
}
const multiply = (a, b) => a * b

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};