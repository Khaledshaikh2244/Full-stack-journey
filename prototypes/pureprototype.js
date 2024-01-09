let myName = "khaled   ";
let myWork  = "programming    ";

//task to remove unwnted spaces in it
// can be done trim().length
//but we focues with doing .trueLength => method


let myHero = ["thor" , "spiderMan"];


let heroPower = {
    thor : "hammer",
    
    spiderMan : "sling",


    getSpiderPower : function() {
        console.log(`spidey is power is ${this.spiderMan}`);
    }
}


 // but we can add it manaually

// /now creating .hitesh() manaually wich not present in the property

//if we hae object then we also have prototype of it so

Object.prototype.hitesh = function() {
    console.log("hitesh is present in all objects");
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
}

heroPower.hitesh(); ///this is not present in the property 


// console.log(heroPower); //=>o/p this is not present in the property

// now checking that if the myHero[] has also .hitesh() which we provided manaually to top level Object
// myHero.hitesh();

// myHero.heyHitesh();     //o/p => Hitesh says hello 
//here we assign property to low-levelv ie array but not to the top level so

// heroPower.heyHitesh();    //it will generate Eror as not having access to it
// so we have access the top-level hierarchy i.e of object then we addded new property to it
// pro assing to array wont ne access ny




//InheriTance
    const User = {
        name : "chai",
        email : "khalid@gmail.com"
    }

const Teacher  = {
    makeVideo : true
};

const TeachingSupport = {
    isAvailable : false
}   

const TASupport = {
    makeAssignment : " JS assigment",
    isFulltime : true,
    __proto__: TeachingSupport  // lniked TASupport with TeachingSupport

}

    Teacher.__proto__ = User;  //Teacher will get access all properties of User
//  To   -  method    -fromwhere//    this is what protypal inheritance 
//is there any method link this all ? 
// __prot__ 


//Modern way of Writing

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport will access all properties of Teacher




//backing to the problem soluition of removing spaces...


//giving properties to string to do this


let anotherUsername  = "myJourney   "

String.prototype.trueLength = function() {
    // console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);

}


anotherUsername.trueLength();
"gooood".trueLength();
"iceTeaa".trueLength();