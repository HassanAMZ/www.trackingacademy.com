const getMonthYear = (dateString: string) => {
 const date = new Date(dateString);
 return date.toLocaleString("default", { month: "long", year: "numeric" });
};

export default getMonthYear;
