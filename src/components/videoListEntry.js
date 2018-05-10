angular.module('video-player')

.controller('video-entry-controller', function () {
})

.component('videoListEntry', {
  controller: 'video-entry-controller',
  bindings: {
    video: '<',
    onClick: '<',
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
