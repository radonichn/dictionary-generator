import { useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function Form(props) {
  const [minWordLength, setMinWordLength] = useState('5');
  const [wordsCount, setWordsCount] = useState('50');
  const [text, setText] = useState('');
  const [signature, setSignature] = useState('Радоніч Н.');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(text, minWordLength, wordsCount, signature);
  }

  return (
    <form 
      className="shadow w-10/12 p-5 mt-5 mb-20 bg-white rounded flex flex-col"
      onSubmit={handleSubmit}
    >
      <TextInput value={minWordLength} onChange={setMinWordLength} placeholder="Input min word length" />
      <TextInput value={wordsCount} onChange={setWordsCount} placeholder="Input needed words count" />
      <TextInput value={signature} onChange={setSignature} placeholder="Input signature" />
      <TextArea value={text} onChange={setText} placeholder="Input article text" />
      <button
        className="bg-teal-100 py-2 px-5 min-w-full mt-5 self-end rounded-xl transition-transform active:scale-95"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}