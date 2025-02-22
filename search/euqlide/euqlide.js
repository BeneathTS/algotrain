// my emplimentation
export const euqlide = (a, b) => {
  let firstArg = Math.abs(a)
  let secondArg = Math.abs(b)

  if (firstArg === secondArg) {
    return a
  }

  return firstArg > secondArg
    ? euqlide(firstArg - secondArg, secondArg)
    : euqlide(firstArg, secondArg - firstArg)
}

// faster solution
/* const solution = (a, b) => a % b
**   ? solution (b, a % b)
**   : Math.abs(b) 
*/
