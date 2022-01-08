export function generateASCIIChar(code: number): string {
  const ASCII = String.fromCharCode(code)

  return ASCII
}

export function generateDecimal(min: number, max: number): number {
  const randomDecimal = Math.floor(Math.random() * (max - min + 1) + min)

  return randomDecimal
}