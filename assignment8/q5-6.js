//Write a function that takes object as input and prints all keys and values in a valid JSON format

function printjson(obj){
    if(obj==null){
        console.log("Object is null, cant perform operation");
        return;
    }
    // null- Do not filter or change any keys/values (i.e., include everything).
    // obj- name of object
    //1- for indentation
    const resultjson= JSON.stringify(obj,null,1);
    console.log(resultjson);
}

let student = {
  name: "Dd",
  age: 21,
  isGraduate: false,
  skills: ["JavaScript", "React", "Node.js"],
  address: {
    street: "LG street",
    city: "Coimbatore",
    state: "Tamil Nadu"
  }
};

printjson(student);

//Print all values of a nested obj
console.log("Printing the nested object: ");
function printAllvalues(obj){
    for(let key in obj){
        if(typeof(obj[key])=="object"){
            console.log(`${key}: `)
            printAllvalues(obj[key]);
        }
        else{
            console.log(`${key} : ${obj[key]}`);
        }
    }
}

printAllvalues(student);
