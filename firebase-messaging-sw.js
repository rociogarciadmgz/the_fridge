importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC4zVbZZi901BPs_H86zGJcWo1dPjuvQeI",
  authDomain: "the-fridge-gd.firebaseapp.com",
  projectId: "the-fridge-gd",
  storageBucket: "the-fridge-gd.firebasestorage.app",
  messagingSenderId: "811655614078",
  appId: "1:811655614078:web:46e6ee29e2a05141a0522f",
  measurementId: "G-7QYHRNR2BK"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || "The Fridge";
  const notificationOptions = {
    body: payload.notification?.body || "Actualización en la nevera",
    icon: "logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
