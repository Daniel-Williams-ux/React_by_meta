function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

/*Notice that <MyButton /> starts with a capital letter. That’s how you know it’s a React component. 
React component names must always start with a capital letter, while HTML tags must be lowercase.

The export default keywords specify the main component in the file.
*/
