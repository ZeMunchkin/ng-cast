angular.module('video-player')

.controller('search-control', function(youTube) {
  this.searchYouTube = () => {
    console.log('invoked');
    console.log(this.input);
    youTube.search(this.input, this.onUpdate);
  }
})

.component('search', {
  controller: 'search-control',
  bindings: {
    onUpdate: '<',

  },
  templateUrl: 'src/templates/search.html'
});
