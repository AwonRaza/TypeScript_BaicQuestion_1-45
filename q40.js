"use strict";
/***
 *
 *
 * Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
 *
 *
 */
let make_album = (artist_name, album_title, number_track) => {
    let music_album = {
        artist: artist_name,
        album: album_title,
        track: number_track
    };
    return music_album;
};
let album = make_album("Atif", "Doorie", 10);
let album1 = make_album("Rahat", "Back 2 Love", 15);
let album2 = make_album("Nazia Hassan", "Disco Dewewane", 10);
console.log(album);
console.log(album1);
console.log(album2);
