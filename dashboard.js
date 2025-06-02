import { db } from "../firebase-config/firebase.js"; // Import Firebase Firestore instance

document.getElementById('articleForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var content = document.getElementById('editor').value;

    try {
        await db.collection("articles").add({
            title: title,
            content: content,
            timestamp: new Date(),
        });
        alert("Article saved successfully!");
    } catch (error) {
        console.error("Error saving article:", error);
    }
});
