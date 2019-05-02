"use strict";

//  NameForm function needs NameService function to be parameter (argument) for this to work
function NameForm(NameService) {
    const ctrl = this;

    // nameInput is the ng-model value on this template input
    ctrl.setName = (nameInput) => {
      console.log(`setName called w/ input: ${nameInput}`);
      NameService.setName(nameInput);
    }
  }
  
  // Remember $ctrl is needed in template html code if using ctrl
  angular
    .module('NameApp')
    .component('nameForm', {
        template: `
        <p><input type="text" placeholder="Name" ng-model="$ctrl.nameInput"></p>
        <button ng-click="$ctrl.setName($ctrl.nameInput)">Save</button>
        `,
        controller: NameForm 
});