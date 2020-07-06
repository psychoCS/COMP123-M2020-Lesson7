"use strict";

// IIFE -Immediately Ivoked Function Expression
(function () {

    /*
    // Step 1 - Create class closure (IIFE)
    let Person = (function () {

        // Step 3 - Define some properties


        // Name Property
        Object.defineProperty(Person.prototype, "Name", {
                get: function () {
                    return this.m_name;
                },
                set: function (value) {
                    this.m_name = value;
                },
                enumerable: false,
                configurable: true
            }

        )

        // Age Property
        Object.defineProperties(Person.prototype, "Age", {
                get: function () {
                    return this.m_age;
                },
                set: function (value) {
                    this.m_age = value
                },
                enumerable: false,
                configurable: true

            }


        )


        // Step 2- Create a constructor
        function Person(name, age) {

            // properties
            this.Name = name;
            this.age = age;

        }

        // Step 4 - Define some Methods


        // method notation
        Person.prototype.saysHello = function () {
            console.log(`${this.Name} says Hell!`);
        }


        // Step 5 - you must return the Person Constructor
        return Person;


    }());

    */

    class Person {

        // PROPERTIES

        //Name Properties
        get Name() {
            return this.m_name;
        }

        set Name(value) {
            this.m_name = value;
        }

        //Age Property
        get Age() {
            return this.m_age;
        }

        set Age(value) {
            this.m_age = value
        }

        // CONSTRUCTOR
        constructor(name, age) {
            this.Name = name;
            this.Age = age;
        }

        // METHODS
        saysHello() {
            console.log(`${this.Name}`
                says Hello!)
        }
    }

    function Start() {

        let thiago = new Person("Thiago", 35)
        console.log(`$(this.Name) say Hello!`);
    }

    window.addEventListener("load", Start);

})();