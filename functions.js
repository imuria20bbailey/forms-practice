console.log("testing")



function add(){
     return 2+3
}
const result = add()
console.log(result)

//or you can do this
// function add(){
//     console.log(2+3)
//     return 2+3
// }
//  add()


 //using parameters
//  function add(a,b){
//     return a+b
// }
// var name = add(5,6)
// console.log(name)


//class person
class person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(params){
        console.log(params)
    }
    drink(params){
        console.log(params)
    }
}
let ruth = new person("ruth",30,"female");
ruth.eat("chips chicken")
ruth.drink("water")
console.log(ruth)

let barbra = new person("barbra",28,"female");
barbra.eat("potatoes greens")
console.log(barbra)