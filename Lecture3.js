function name(firstName,LastNmae,gender){
    var output;
    if(gender=='male'){
        output='Mr. '+firstName+' '+LastNmae;

        
    }
    else if(gender=='female')
    {
        output='Ms. '+firstName+' '+LastNmae;
    }
    return output;
}

var fullName=name('Shikha','Hasan','female');
console.log(fullName);

function example(){
    return {
        name :'Rakibul',
        skill:['java','javascript'],
        print: function(){
            console.log(this.name,this.skill);
        }

    }
}
var obj = example();
obj.print();
