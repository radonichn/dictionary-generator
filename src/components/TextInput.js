export default function TextInput(props) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      type='text'
      placeholder={props.placeholder}
    />
  );
}
