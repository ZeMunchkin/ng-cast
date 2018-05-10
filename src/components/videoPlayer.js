angular.module('video-player')

.controller('videoPlayerController', function () {
  this.videoUrl = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  };
})

.component('videoPlayer', {
  controller: 'videoPlayerController',
  bindings: {
    video: '<',
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
