# TypeScript Optional Parameter Bug

This repository demonstrates a common error encountered when using optional parameters in TypeScript functions, specifically within a `switch` statement.

## The Bug

The `calculateArea` function attempts to compute the area of rectangles and triangles.  While the `height` parameter is optional, the function doesn't gracefully handle the case where the shape is a triangle but `height` is missing. This results in unexpected behavior.

## Solution

The solution involves checking for the existence of the `height` parameter *before* using it within the `switch` statement. This ensures that the function handles both the presence and absence of the `height` parameter gracefully.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Compile and run the TypeScript code.