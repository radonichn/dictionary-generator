import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { capitalizeFirstLetter, parseText } from './utils/parser';

function App() {
  const [result, setResult] = useState([]);
  const [signature, setSignature] = useState('');

  const translate = (wordsList, signature) => {
    let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}`;
    url += '&q=' + JSON.stringify(wordsList);
    url += `&format=text`;
    url += `&source=en`;
    url += `&target=uk`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const translation = response.data.translations[0].translatedText;
        const preparedTranslation = translation.replace(/(«|»|\[|\]|")/g, '');
        const translatedWordsList = preparedTranslation
          .split(',')
          .map((v) => capitalizeFirstLetter(v));
        setSignature(signature);
        setResult([...wordsList, ...translatedWordsList]);
      })
      .catch((error) => {
        console.log('There was an error with the translation request: ', error);
      });
  };

  const handleSubmit = (text, minWordLength, wordsCount, signature) => {
    translate(parseText(text, minWordLength, wordsCount), signature);
  };

  return (
    <div className='flex flex-col items-center bg-red-100'>
      <h1 className='text-3xl mt-10'>Dictionary creator</h1>
      <Form onSubmit={handleSubmit} />
      {signature && (
        <List list={result} signature={signature} />
      )}
    </div>
  );
}

export default App;
