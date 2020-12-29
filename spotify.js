var info;
window.onload = $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=sripushkar&api_key=876573fb8f68da56ce4117353cb19ed5&format=json', function(data) {

    //var artist = $(".artist"),
    //track = $(".track"),
    const artist = data.recenttracks.track[0].artist["#text"];
    const album = data.recenttracks.track[0].album["#text"];
    const track = data.recenttracks.track[0].name;
    const image = data.recenttracks.track[0].image[3]["#text"]
    info = {
        artist: artist,
        album: album,
        track: track,
        image: image
    }
    console.log(info)
    document.getElementById("track").innerHTML = info.track
    document.getElementById("artist").innerHTML = info.artist
    document.getElementById("album").innerHTML = info.album
    document.getElementById("cover").src = info.image
    
});