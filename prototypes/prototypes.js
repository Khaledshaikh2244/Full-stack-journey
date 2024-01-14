// In JavaScript, prototypes are a mechanism for objects to inherit
// properties and methods from other objects. Every JavaScript object 
// has a prototype, and these prototypes form a chain or hierarchy 
// known as the prototype chain

// predfined proeperty

//prototypal Inheritnace
// 
// __proto__  => superclass(superobject)

// diff btn normal obje vs prototype ?
// all the things built usign prototype(Object) method will not directly addded to obj
//as it does in obj.


//some proprty which is absent or not defined in protyope bsd obj , it will inheritance frm parent
// when asked..




let person = {
    name : "Alpha",
    age  : 18,
    talk : function(){
console.log('talking now');

    }
}

console.log(person);

//another way of creating Object

let person2 = Object.create({
    name : "Alpha",
    age : 25,
    talk : function(){
        console.log("new created with prototyops")
    }
})

console.log(person2);

