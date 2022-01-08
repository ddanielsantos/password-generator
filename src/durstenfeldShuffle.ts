import { generateDecimal } from "./generators"

export function durstenfeldShuffle(givenArray: any[]): any[] {
  for (let initialPosition = 0; initialPosition <= givenArray.length - 2; initialPosition++) {
    let swap
    const newPosition = generateDecimal(initialPosition, givenArray.length)

    swap = givenArray[initialPosition]
    givenArray[initialPosition] = givenArray[newPosition]
    givenArray[newPosition] = swap
  }

  return givenArray
}