var subtitles = {
    T_191800_video_opg3: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:05:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:07:00"), TTime("00:00:10:00"), "Andrea Jern Thomsen - Vært<br />Lige nu, der står vi i Odense Rådhus til -"),
			T(TTime("00:00:10:00"), TTime("00:00:15:00"), "- eSportligaens første Danmarksmesterskab i eSport."),
			T(TTime("00:00:17:25"), TTime("00:00:19:15"), "Kun én tilbage nu…"),
			T(TTime("00:00:20:00"), TTime("00:00:22:00"), "…Wadion lukker ham!"),
			T(TTime("00:00:23:00"), TTime("00:00:24:30"), "Der bliver dystet i FIFA."),
			T(TTime("00:00:24:30"), TTime("00:00:26:15"), "Der bliver dystet i LoL –"),
			T(TTime("00:00:26:15"), TTime("00:00:28:15"), "– og ikke mindst i Counter-Strike."),
			T(TTime("00:00:39:20"), TTime("00:00:41:15"), "De bliver dræbt alle sammen, igen!"),
			T(TTime("00:00:41:15"), TTime("00:00:43:00"), "De prøver at undvige, hver især, -"),
			T(TTime("00:00:43:00"), TTime("00:00:45:00"), "– men her ryger Nexus."),
			T(TTime("00:00:45:15"), TTime("00:00:47:00"), "Fedt publikum –"),
			T(TTime("00:00:47:00"), TTime("00:00:49:00"), "– og rigtig gode professionelle spillere vi har heroppe."),
			T(TTime("00:00:49:00"), TTime("00:00:50:15"), "Det er super fedt, at få så meget opbakning."),
			T(TTime("00:00:50:15"), TTime("00:00:51:30"), "Der er en god konkurrenceånd."),
			T(TTime("00:00:51:30"), TTime("00:00:53:15"), "Vi synes, at det er noget af det fedeste vi har været til."),
			T(TTime("00:00:53:15"), TTime("00:00:54:45"), "Sådan! Han lukker den dér!"),
			T(TTime("00:01:02:05"), TTime("00:01:03:30"), "Danmarksmestre!")
        ]
    }
};

/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if(arguments.length == 1) {
		frames = (arguments[0]*1)/24;
	}
	else if(arguments.length == 2) {
		frames = (arguments[1]*1)/24;
		seconds = arguments[0]*1;
	}
	else if(arguments.length == 3) {
		frames = (arguments[2]*1)/24;
		seconds = arguments[1]*1;
		minutes = (arguments[0]*1)*60;
	}
	else if(arguments.length == 4) {
		frames = (arguments[3]*1)/24;
		seconds = arguments[2]*1;
		minutes = (arguments[1]*1)*60;
		hours = (arguments[0]*1)*3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * @param {*} value 
 */
function UndefinedToZero(value) {
	if(typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 * @param {numeric} frames Not Required
 * @param {numeric} seconds Not Required
 * @param {numeric} minutes Not Required
 * @param {numeric} hours Not Required
 */
function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if(typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3]*1)/24;
	var seconds = split[2]*1;
	var minutes = (split[1]*1)*60;
	var hours = (split[0]*1)*3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}