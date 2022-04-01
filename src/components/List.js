export default function List({ list = [], signature }) {
  return (
    <div className='bg-white p-5 rounded shadow w-10/12 mb-10'>
      <p className='text-2xl text-center font-bold mb-5'>Словник</p>
      <p className='text-right italic mb-5'>{signature} СЗД-41</p>
      <ul className='columns-2 text-center'>
        {list.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
