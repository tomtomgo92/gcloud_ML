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
const fileName = 'http://slideplayer.com/4846720/15/images/12/How+Size+Affects+the+Likelihood+of+Attack.jpg';

// Performs property detection on the local file
client
  .imageProperties(fileName)
  .then(results => {
    const properties = results[0].imagePropertiesAnnotation;
    const colors = properties.dominantColors.colors;
    colors.forEach(color => console.log(color));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });