importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

// tu configuración de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB4OFajtU-bKi7wuN5B1N_1x71hDo4nf8U",
  authDomain: "alarmaswof.firebaseapp.com",
  databaseURL: "https://alarmaswof-default-rtdb.firebaseio.com",
  projectId: "alarmaswof",
  storageBucket: "alarmaswof.appspot.com",
  messagingSenderId: "xxxx",
  appId: "1:xxxx:web:xxxx"
});

// Inicializar messaging
const messaging = firebase.messaging();

// Recepción de mensajes cuando la página no está abierta
messaging.onBackgroundMessage((payload) => {
  console.log("Recibido en background:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo.png" // opcional, tu ícono
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
