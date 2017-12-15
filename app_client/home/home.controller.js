(function() {

  angular
    .module('survivorApp')
    .controller('homeCtrl', homeCtrl);
  //Changed from SelectedData to OmdbData
  homeCtrl.$inject = ['$scope', 'SurvivorData', `OmdbData`];
  //

  //playerCtrl.$inject = ['$scope', 'SurvivorData', 'PlayerData', 'SelectedData'];

  // function playerCtrl($scope, SurvivorData, PlayerData, SelectedData) {
  function homeCtrl($scope, SurvivorData, OmdbData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    //console.log(window.location);

    vm.content = "Survivor Data";

    //add here
    vm.getOmdbData = function() {
      console.log("Getting data?");
      OmdbData.getOmdb()
        .then(function(response) {
          vm.omdbData = response.data;
          console.log(vm.omdbData);
          console.log(vm.omdbData.Title);
        })
        .catch(function(e) {
          console.log(e);
        });

    };
    vm.getOmdbData();
  }
  //end add

  /*
    vm.selectedContestantName = "";
    vm.selectedSeasonName = "";
    vm.selectedAge = "";
    
   
   // }      
  }
*/
})();
