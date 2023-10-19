function generateLightColor() {
 const letters = "abcdef"; // Using these values to get a lighter color
 let color = "#";
 for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * letters.length)];
 }
 return color;
}

export default generateLightColor;
