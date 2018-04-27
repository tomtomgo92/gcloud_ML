const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    projectId: 'paulemploi-f88b4',
    keyFilename: '/Users/thomas/Downloads/paulEmploi-6383268e9a3f.json',
  });

  // Performs label detection on the image file
client
.labelDetection('https://www.royalcanin.fr/wp-content/uploads/Golden-Retriever-Images-Photos-Animal-000120.png')
.then(results => {
  const labels = results[0].labelAnnotations;

  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
  
  const colors = results[0].ColorInfo;

  console.log('colors:');
console.log(color.description);
})
.catch(err => {
  console.error('ERROR:', err);
});
// [END vision_quickstart]