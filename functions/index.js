const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Testing from Firebase!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("posts/{postId}")
  .onCreate(doc => {
    const post = doc.data();
    const notification = {
      content: "Added a new post",
      user: post.username,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.firestore
  .document("users/{uid}")
  .onCreate(doc => {
    const user = doc.data();
    const notification = {
      content: "Joined the party",
      user: user.username,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });
