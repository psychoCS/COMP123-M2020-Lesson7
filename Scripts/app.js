"use strict";

// IIFE -Immediately Ivoked Function Expression
(function () {

    function Start() {

        let thiago = new Person("Thiago", 35)
        console.log(`$(this.Name) say Hello!`);
    }

    window.addEventListener("load", Start);

})();