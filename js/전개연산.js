//전개연산.js
const numbers=[1,2,3];
const copynumbers=[...numbers];

console.log(numbers===copynumbers);//false
console.log(numbers==copynumbers[0]);//true

const n1=[1,2,3];
const n2=[4,5,6];
