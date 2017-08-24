function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

function Playlist(playName) {
  this.playName = playName;
  this.tracks = [
    new Track("a", 4, 333),
    new Track("b", 5, 333),
    new Track("c", 1, 333),
  ]

  this.overallRating = function() {
    let total=0
    for (i = 0; i < this.tracks.length; i++){
      total += this.tracks[i].trackRating;
    }
    return (total/this.tracks.length);
  };

  this.overallTime
}


function Track(trackName, trackRating, trackTime){
  this.trackName = trackName;
  this.trackRating = trackRating;
  this.trackTime = trackTime;
}

Object.setPrototypeOf(playlists , Library)

Object.setPrototypeOf(tracks , playlists)


let playlist {
  (Library.playlist)push(newPlaylist())
}
let tracks {
  (newPlaylist.tracks)push(newtracks())
}



