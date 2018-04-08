var arr =[10,2,1,2,3,4];
arr.forEach(function(a) {
    console.log(a);
    
});
function callback(a){
    console.log(a);
    
}
arr.forEach(callback);

function someOne() {
    return function(name)
    {
        return('SomeOne Calling you '+(name));
    }
    
}
var x=someOne()('Rakib');
console.log(x);
