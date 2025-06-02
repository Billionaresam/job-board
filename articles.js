import { db } from "../firebase-config/firebase.js"; // Import Firestore instance

db.collection("articles").orderBy("timestamp", "desc").onSnapshot(snapshot => {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = "";

    snapshot.forEach(doc => {
        var data = doc.data();
        articlesContainer.innerHTML += `
            <h3>${data.title}</h3>
            <p>${data.content}</p>
        `;
    });
});
