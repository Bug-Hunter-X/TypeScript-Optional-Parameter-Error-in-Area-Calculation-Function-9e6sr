function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return 0.5 * width * height;
    default:
      return 0; // Handle invalid shapes
  }
}

let area = calculateArea("rectangle", 10, 5); // Correct
console.log(area); // Output: 50

area = calculateArea("triangle", 10); //Error: height is missing for triangle
console.log(area); // Output: 0