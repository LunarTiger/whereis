var htmldefault = "You can contact me at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through my <a href='/contact' id='contact' target='_blank'>contact page</a>.";
var htmlhome = "I'm home at <a href='https://www.google.com/maps/place/293+Babbs+Mountain+Rd,+Winchester,+VA+22603/@39.2744651,-78.1799907,17z/data=!3m1!4b1!4m5!3m4!1s0x89b5f115682b0d49:0xa79fd3617adf6fc!8m2!3d39.274461!4d-78.177802' id='address' target='_blank'>293 Babbs Mountain Rd. Winchester, VA 22603</a>.";
var htmlawayd = "I'm out with my dad, Lanny. He can be contacted at <a href='tel:+15403279023'>1-540-327-9023</a>.";
var htmlawaym = "I'm out with my mom, Shelva. She can be contacted at <a href='tel:+13048204338'>1-304-820-4338</a>.";
try{
	var config = {
		databaseURL: "https://lunar-home.firebaseio.com/",
	};
	firebase.initializeApp(config);
	var database = firebase.database();
	//Extra info
	var message = database.ref('dog/stat');
	message.on('value', (function(snapshot) {
		var messageVal = snapshot.val();
		if(messageVal){
			if(messageVal=="home"){
				document.getElementById('more-info').innerHTML = htmlhome+"&nbsp;"+htmldefault;
			}
			else if(messageVal=="awayd"){
				document.getElementById('more-info').innerHTML = htmlawayd+"&nbsp;"+htmldefault;
			}
			else if(messageVal=="awaym"){
				document.getElementById('more-info').innerHTML = htmlawaym+"&nbsp;"+htmldefault;
			}
			else{
				document.getElementById('more-info').innerHTML = messageVal+"&nbsp;"+htmldefault;
			}
		}
		if(!messageVal){
			document.getElementById('more-info').innerHTML = "No clue. "+htmldefault;
		}
	}));
}
catch{
	document.getElementById('more-info').innerHTML = "The script crashed. "+htmldefault;
}
