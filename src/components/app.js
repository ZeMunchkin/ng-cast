angular.module('video-player')

.controller('app-controller', function($window) {
  this.selectVideo = function(video) {
    this.currentVideo = video;
  }.bind(this);

  this.updateVideos = (videos) => {
    this.videos = videos;
    this.currentVideo = this.videos[0];
  }

  this.updateVideos($window.exampleVideoData);

  /* 
    alternatively, you can use arrow functions:

    this.selectVideo = (video) => {}


    or can use closure variable:

    var vm = this;
    this.selectVideo = function(video) {
      vm.currentVidedo = video;
    }
  */
})

.component('app', { 
  controller: 'app-controller',
  bindings: {},
  templateUrl: 'src/templates/app.html'
});
