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

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return clients.openWindow('./index.html');
    })
  );
});
