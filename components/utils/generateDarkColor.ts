function generateDarkColor(opacity: number = 1): string {
 const letters = "01234567"; // Using just the first 8 digits to get a darker color
 let color = "#";
 for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * letters.length)];
 }

 // Convert hexadecimal color to rgba
 const r = parseInt(color.slice(1, 3), 16);
 const g = parseInt(color.slice(3, 5), 16);
 const b = parseInt(color.slice(5, 7), 16);

 return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default generateDarkColor;
