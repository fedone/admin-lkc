importScripts('https://www.gstatic.com/firebaseja/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebaseja/3.9.0/firebase-messaging.js');

firebase.initializeApp({
	'messagingSenderId': '180088518330'
});

const messaging = firebase.messaging();