function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      return width * height!; // Non-null assertion is safe here since height is required for rectangle
    case "triangle":
      if (height === undefined) {
        throw new Error("Height is required for calculating the area of a triangle.");
      }
      return 0.5 * width * height;
    default:
      return 0; // Handle invalid shapes
  }
}

let area = calculateArea("rectangle", 10, 5); // Correct
console.log(area); // Output: 50

try {
  area = calculateArea("triangle", 10); // Throws an error as expected
  console.log(area); 
} catch (error) {
  console.error(error.message); // Output: Height is required for calculating the area of a triangle.
}

area = calculateArea("triangle", 10, 5); //Correct
console.log(area); //Output:25