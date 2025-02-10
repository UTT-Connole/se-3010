
const factorial = (inputNumber: number) => {
    let total = 1
    for(let i = 1; i <= inputNumber; i++) {
        total = total * i
    }
   return total
};


export { factorial };



