function formatDate(dateString: string): string {
 const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
 };

 const date = new Date(dateString);
 let day = date.getDate().toString();

 // Adding the suffix for the day
 if (day.endsWith("1") && day !== "11") {
  day = day + "st";
 } else if (day.endsWith("2") && day !== "12") {
  day = day + "nd";
 } else if (day.endsWith("3") && day !== "13") {
  day = day + "rd";
 } else {
  day = day + "th";
 }

 const monthYear = date.toLocaleString("en-US", options).trim();
 return `${day} ${monthYear}`;
}
export default formatDate;
