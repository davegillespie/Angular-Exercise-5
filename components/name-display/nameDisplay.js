"use strict";

//  NameDisplay function, needs NameService function to be parameter (argument), for nameDisplay.js to be connected with name.service.js
function NameDisplay(NameService) {
    const ctrl = this;
    
    // renderName function, has variable ctrl.nameInput which is equal to: NameService file/function and specifically, calling the getName function
    ctrl.renderName = () => {
      ctrl.nameInput = NameService.getName();
      console.log(`renderName function called in NameDisplay component`);
    }
  }
  
  // renderName function is the ng-click value being called on this template button
  // Remember $ctrl is needed in template html code if using ctrl
  angular.module('NameApp').component('nameDisplay', {
    template: `
    <hr />
    <p>Name: {{$ctrl.nameInput}}</p>
    <button ng-click="$ctrl.renderName();">Load</button>
    `, // or use templateUrl
    controller: NameDisplay, 
});