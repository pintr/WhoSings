import Musixmatch from '../configs/Musixmatch';

export function get(url) {
    // Make get request and obtain response in json format
    return fetch(url).then((data) => data.json());
}

function _randomArtistId() {
    return Math.floor(Math.random() * Musixmatch.ARTIST_ENTRIES);
}

function _getRandomArtist() {
    const requestUrl = `${Musixmatch.BASE_URL}artist.get?apikey=${Musixmatch.API_KEY}&artist_id=${_randomArtistId()}`;
    return get(requestUrl).then((data) => {
        if(data.message.header.status_code !== 200) {
            _getRandomArtist();
        } else {
            return data.message.body.artist.artist_name;
        }
    });
}

function _getRandomTrackLyrics(artistName) {
    const requestUrl = `${Musixmatch.BASE_URL}track.search?apikey=${Musixmatch.API_KEY}&q_artist=${artistName}&f_has_lyrics`;
    return get(requestUrl).then((data) => {
        var tracks = data.message.body.track_list[Math.floor(Math.random() * data.message.body.track_list.length)];
        return _getRandomLyricsById(tracks.track.track_id)
    });
}

function _getRandomLyricsById(trackId) {
    const requestUrl = `${Musixmatch.BASE_URL}track.lyrics.get?apikey=${Musixmatch.API_KEY}&track_id=${trackId}`;
    return get(requestUrl).then((data) => {
        if(data.message.header.status_code !== 200) {
            _getRandomLyricsById(trackId);
        } else {
            return data.message.body.lyrics.lyrics_body;
        }
    });
}

export async function getQuestion() {
    // Set up data structure needed for the question and number of alternatives
    var n = 3;
    var question = {
        lyrics: '',
        artists: [],
        answer: -1
    };

    // Get n random artists
    while (question.artists.length < n) {
        var artist = await _getRandomArtist();
        if (artist) {
            question.artists.push({'name': artist});
        }
    };

    // Find out the lyrics of a song of one of the chosen artists
    while(!question.lyrics) {
        var ans = Math.floor(Math.random() * n);
        var lyr = await _getRandomTrackLyrics(question.artists[ans].name)
        if(lyr) {
            question.answer = ans;
            question.lyrics = lyr;
        }
    }

    return question;
}
