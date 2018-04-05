function sayName(Name){
    return 'Hello '+Name;
}

var hello= sayName;
var anotherhello = hello('Rakib');
//1...Function Can be store in a variable....#We Passed It

var hello =sayName;
var result =hello('Rakibul Hasan');
console.log(result);
console.log(hello('Rakibul Hasan'));

//2...Function Can be stored in array..............#We Passed

var rakib=[1,2,3,4,anotherhello];
rakib.push(anotherhello);
console.log(rakib);
rakib.pop(anotherhello);
console.log(rakib);

//3...Function Can be store as an object field or Property...................#We also Passed..
var person={
    
    Name:anotherhello,
    Phone:'01777871569',
}
console.log(person);

//4..We can create function As needed...............#We also passed It

var sum =10 +(function(){return 20})();//It's a Self Invoking Function...For beginer Just watch we can create..Later we work on it...Take it easy...!!
console.log(sum);

//5.....WE can pass Function As an argument...........#We passed
function argfun(name,arg){
    return arg(name);
    }
var result= argfun('Rakib',sayName)
console.log(result);

//..6....We Can Return Function From Another Function...........#Finally All passed
function base(b){
    return function(n){
        var res =1;
        for(var i=0;i<b;i++)
        {
            res *=n;
        }
        return res;
    }
    
}
///var power =base(2);
//var res=power(5);
var res=base(2)(5);
console.log(res);














