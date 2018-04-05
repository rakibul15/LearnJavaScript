/*=========================================================
Md. Rakibul Hasan
Lecture2....Inner Function
===========================================================*/
function outer(){

    function inner(){
        console.log('I am inner Function');
        
        
    }
    console.log('I am outer Function');
    inner();
   
    
}
outer();

function calculation(a,b){
    function add(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function mul(){
        return a*b;
    }
    function div(){
        return a/b;
       
    }
    var re=div();
    console.log(re);
    
    return add()+sub()+mul()+div();
   
}
var result=calculation(6,4);
console.log(result);



