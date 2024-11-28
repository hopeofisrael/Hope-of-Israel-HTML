const admin = require('firebase-admin');

const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Download from Firebase Console

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  admin.app();
}

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { token } = req.body;

      // Verify the ID token with Firebase Admin SDK
      const decodedToken = await admin.auth().verifyIdToken(token);
      const uid = decodedToken.uid;
      
      // You can save the user info to your database here (e.g., Firebase Firestore)

      res.status(200).json({ message: 'User authenticated', uid });
    } catch (error) {
      res.status(400).json({ error: 'Invalid token', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
