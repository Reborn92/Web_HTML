// console.log("Hello world");
var x = 10;
console.log(x);
console.log(x+10);
x = "xin chao";
console.log(x);
console.log(x+10);
console.log("xinchao" + " t2005e");
console.log(x.length);
var y="A5";
console.log(y+10);
y= parseInt(y);
console.log(y); //Nan --> Not a number

if(isNaN(y)){
    console.log("khong co gia tri");
}else {
    console.log(y+10);
}
for(var i=0; i<10; i++){
    console.log("i = "+i);
}
var ary = [];
ary[0] =1999;
ary[1] = "hello";
ary[2] = [2,3,4,"xin chao",[3,5,1]];
console.log(ary[2][3]);
console.log(ary[2][4][1]);
console.log(ary[2][4][4]); //undefined
ary[2][4][3]=55;
console.log(ary[2][4][3]);
ary[2][4][4] = ["a","b",5];
console.log(ary[2][4][4]);

var s = [1,2,3,5,8,13,21];
for(var i=0; i < s.length; i++){
    console.log(s[i]);
}
var f = ham();
console.log(f);
function ham(a,b) {
    console.log("day la ben trong ham");
    return "xin chao";

}
s.map(function (e) {
    console.log("s: "+e);
});

var arr=[];
for(var i=0; i<10; i++){
    arr[i] = i*2+1;
    console.log(arr[i]);
}
// neu muon them 1 so  nua
arr[10] = 99;
for(var i=0; i<10; i++) {
    arr.push(i*2+1);
}
arr.push(99);
console.log(arr[10]);
arr.splice(1,3);

arr.map(function (e) {
    console.log("arr: " +e);
});

