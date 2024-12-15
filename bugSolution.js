The solution involves using async/await or promises to handle the asynchronous nature of Firebase operations.  Here's how to fix the issue using promises:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    // Access data here, it's guaranteed to be available
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```
Using async/await:

```javascript
async function getData() {
  try {
    const docRef = db.collection('myCollection').doc('myDoc');
    const doc = await docRef.get();
    if (doc.exists) {
      console.log("Document data:", doc.data());
      // Access data here
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}
 getData();
```