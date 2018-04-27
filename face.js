// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
//const client = new vision.ImageAnnotatorClient();
const client = new vision.ImageAnnotatorClient({
    projectId: 'paulemploi-f88b4',
    keyFilename: '/Users/thomas/Downloads/paulEmploi-6383268e9a3f.json',
  });
  

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = 'http://salon-beaute-bordeaux.fr/wp-content/uploads/2013/10/remodelage-visage-face-up.jpg';

client
  .faceDetection(fileName)
  .then(results => {
    const faces = results[0].faceAnnotations;

    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joyLikelihood}`);
      console.log(`    Anger: ${face.angerLikelihood}`);
      console.log(`    Sorrow: ${face.sorrowLikelihood}`);
      console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });