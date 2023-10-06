function generateDarkColor() {
 const letters = "01234567"; // Using just the first 8 digits to get a darker color
 let color = "#";
 for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * letters.length)];
 }
 return color;
}

export default generateDarkColor;
