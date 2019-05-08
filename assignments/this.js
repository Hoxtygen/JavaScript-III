//  "use strict";
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding
    To understand the this binding, it is imperative to understand the call-site; the location in a code where a function is called. The call-site needs to be inspected to know what `this` is referring to.



* 2. Implicit binding
    `this` is said to be implicitly bounded if the call-site has a context object i.e if the call-site contains an object. Consider the code below
    
     This example present an interesting case; note that the bar() referenced in obj is not owned or contained by the obj object. However, when referencing the function the call-site uses the obj context, so it could be said that the obj object contains or owns the function reference at the time the function is called. When there is a context object for a function reference, the implicit binding rule says that it’s that object that should be used for the function call’s this binding. Because obj is the `this` for the bar() call, this.name is synonymous with obj.name.
     Consider the code below
        function bar()  {
        console.log(this.name)
        }

        var obj = {
            name: "Marilyn",
            bar: bar
        };
        obj.bar(); // Marilyn



* 3. Explicit binding
        This is a way of forcing a function call to use a particular object for the this binding, without putting a property function reference on the object. “All” functions in JavaScript have some utilities available to them via their [[Prototype]], which can be useful for this task. Specifically, functions have call(..) and apply(..) methods. 
        They both take, as their first parameter, an object to use for the this, and then invoke the function with that this specified. Since what `this` should be is being  directly stated , it is called explicit binding.
        Consider the code below
        function bar()  {
    console.log(this.name)
}

var obj = {
    name: "Marilyn",
};
bar.call(obj); // Marilyn



        


* 4. new Binding

When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:
        1. A brand new object is created (aka constructed) out of thin air.
        2. The newly constructed object is [[Prototype]]-linked.
        3. The newly constructed object is set as the this binding for that function call.

        Consider the below code :
            function bar(name) {
            this.name = name;
            }
            var moo = new bar("Marilyn");
            console.log( moo.name ); // Marilyn



*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
function bar()  {
    console.log(this.name)
}

var obj = {
    name: "Marilyn",
    bar: bar
};
//obj.bar(); // Marilyn

// Principle 3

// code example for New Binding
function foo(name) {
    this.name = name;
    }
    var bar = new foo("Marilyn");
    console.log( bar.name ); // Marilyn


// Principle 4

// code example for Explicit Binding

function bar()  {
    console.log(this.name)
}

var obj = {
    name: "Marilyn",
};
//bar.call(obj); // Marilyn

