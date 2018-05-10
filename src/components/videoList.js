angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<',
  },
  templateUrl: 'src/templates/videoList.html'
});

// There is no controller defined here -- each component defaults to having
// an empty controller function. By passing one in, we are over-riding the
// default value. It's absolutely fine not to define one since a blank one
// comes with it.
