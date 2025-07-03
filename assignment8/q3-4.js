// Demonstrate an example that shows that array elements can be of different types.

const strarray=["banana","apple","strawberry","orange","pineapple"]

const chararray=['a','b','c','d','e']

const numarray=[1,2,3,4,5]

const floatarray=[1.23,2.34,3.45,4.56,5.67]

console.log(strarray+"\n"+chararray+"\n"+numarray+"\n"+floatarray);


let mixedarray=[
    21,
    "hello",
    true,
    {name:"dd",company:"Rently"},
    [1,2,3],
    function(){return 21;},
    null,
    undefined
]

mixedarray.forEach((val,ind)=>{
    console.log(`${ind} : ${val} : type- ${typeof(val)}`);
})

console.log("Type of mixedarray is ",typeof(mixedarray));

//Demonstrate replace all occurrences of a string within a sentence.
let sentence= "Sunflowers have bloomed in my garden and all is red in color";
console.log("Before update: ",sentence);


let result= sentence.replace("Sunflowers","Roses");
// to replace all, we can use replaceAll function
// to avoid case sensitivity and replace all occcurances, use /roses/gi (g-global and i for case-insensitive)
console.log("After changing first word: ",result);


let resultregex= result.replace(/IS/gi,"are");
console.log("Using regex: ",resultregex);

