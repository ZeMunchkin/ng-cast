angular.module('video-player')
.service('youTube', function($http, $window){
  this.search = (query, callback) => {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: $window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        videoEmbeddable: 'true'
      }
    })
    .then(({data}) => {
      console.log(data);
      callback(data.items);
    })
    .catch((data) => {
      console.log('ERROR!', data);
    });
  }
});
