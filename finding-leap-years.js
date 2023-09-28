const years = [2012, 2015, 3064, 1936, 1944, 1997, 2019, 2023, 1972, 2024, 10000, 570]

// finding leap years from an array and make a new one
function leapYears (yearsArray){
    let newLeapYearsArray = [];
    for (let i = 0; i < yearsArray.length; i++){
        if ((yearsArray[i] % 4 === 0) && (yearsArray[i] % 100 !== 0)){
            newLeapYearsArray.push(yearsArray[i])
        }
    } return newLeapYearsArray;
}
console.log(leapYears(years));