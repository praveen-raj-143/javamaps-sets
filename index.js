let string ="abcadeecfb";
let S=new Set();
for(i=0;i<string.length;i++){
    S.add(string[i]);
}
let result="";
for(let count of S){
    result=result+count;
}
console.log(result);

// let s= "abcadeecfb";
// let map = new Map();
// for(i=0;i<s.length;i++){
//     if(map.has(s[i])){
//         let value=map.get(s[i]);
//         map.set(s[i],value+1);
//     }
//     else{
//         map.set(s[i],1);
//     }
// }
// for(let [k,v] of map){
//     console.log(k+" -+=> "+v);
// }