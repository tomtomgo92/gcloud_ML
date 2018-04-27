// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
//const client = new language.LanguageServiceClient();

const client = new language.LanguageServiceClient({
  projectId: 'paulemploi-f88b4',
  keyFilename: '/Users/thomas/Downloads/paulEmploi-6383268e9a3f.json',
});

// The text to analyze
const text = 'Je suis un homme, je n\'aime pas les chien';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });