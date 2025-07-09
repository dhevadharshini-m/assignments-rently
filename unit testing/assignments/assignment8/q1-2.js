//day
function DayofDate(dateinput){
    const date= new Date(dateinput);
    const arr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    console.log(arr[date.getDay()]);
}

DayofDate("2025-06-21");

//splice
const array= [20,21,22,23,24,25,26,27];
console.log(array);

//replace element
array.splice(1,0,45);
console.log(array);

//replace multiple elements
array.splice(0,0,90,91,92)
console.log(array);

// delete elements
array.splice(2,3);
console.log(array);