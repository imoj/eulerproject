/**
  * Count the number of sundays which fall on the first of any month in the 20th century.
  */

const isLeapYear = x => (x % 4 === 0 && x % 100 !== 0) || x % 400 === 0;

const MONTHS = new Map([
  [1, () => 31],
  [2, x => (x ? 29 : 28)],
  [3, () => 31],
  [4, () => 30],
  [5, () => 31],
  [6, () => 30],
  [7, () => 31],
  [8, () => 31],
  [9, () => 30],
  [10, () => 31],
  [11, () => 30],
  [12, () => 31],
]);

const getYearDates = (year, startDay) => {
  const daysOfAYear = [];
  let currentDay = startDay;
  MONTHS.forEach((m, index) => {
    for (let day = 1; day <= m(isLeapYear(year)); day += 1) {
      daysOfAYear.push({
        day, month: index, year, weekDay: currentDay,
      });
      currentDay = (currentDay + 1) % 7;
    }
  });
  return { days: daysOfAYear, last: currentDay };
};

let days = [];
let startDay = 0;
for (let year = 1900; year < 2001; year += 1) {
  const current = getYearDates(year, startDay);
  days = days.concat(current.days);
  startDay = current.last;
}

let century = days.filter(day => day.year > 1900);

century = century.filter(day => day.weekDay === 6 && day.day === 1);
console.log(century.length);
