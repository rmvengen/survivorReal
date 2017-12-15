(function() {

  angular
    .module('survivorApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Survivor Data";
    
    //add here
     vm.getOmdbData = function()
    {
      console.log("Getting data?");
                    OmdbData.getOmdbData()
                    .then(function(response){
                        vm.omdbData = response.data;
                        console.log(vm.omdbData);
                        console.log(vm.omdbData.title)
                    })
                    .catch(function(e){
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
    
    //check selected Departure
    if(SelectedData.selectedContestantName !== null){
      vm.selectedContestantName = SelectedData.selectedContestantName;
    }
    
    //check selected Arrival
    if(SelectedData.selectedSeasonName !== null){
      vm.selectedSeasonName = SelectedData.selectedSeasonName;
    }
    
    //check selected weight
    //if(SelectedData.selectedAge !== null){
      //.selectedAge = SelectedData.selectedAge;
   // }      
  }
*/
})();
