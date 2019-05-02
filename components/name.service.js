"use strict";

// NameService function will become a parameter for both nameForm to setName, and nameDisplay to getName
function NameService()  {
    // service will be "this" NameService function
    const service = this;
  
    name = 'Test, no custom value saved.';
  
    // nameInput is the ng-model value, within the html input element, in the template of the nameForm.js component
    service.setName = (nameInput) => {
      console.log(`setName saved from input: ${nameInput}`);
      name = nameInput;
      return name;
    }
  
    // getName function will be tied to nameDisplay.js
    service.getName = () => {
      console.log(`getName function run in service`);
      return name;
    }
  }
    
    angular
      .module("NameApp")
      .service("NameService", NameService);