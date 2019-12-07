/* eslint-disable */

// Checks if the window is defined
export const IS_BROWSER = typeof window !== 'undefined';

// Removes or alters characters in a string to make it URL safe
export function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

// Takes a variety of YouTube URL types and outputs the Video ID
export function getYoutubeID(url) {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);
	return match && match[7].length == 11 ? match[7] : false;
}

// Takes an array and returns it with the items in a random order
export function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Converts seconds to Hours, Mins, Seconds
export function secondsToHms(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor((d % 3600) / 60);
	var s = Math.floor((d % 3600) % 60);

	var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
	var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
	var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
	return hDisplay + mDisplay + sDisplay;
}
