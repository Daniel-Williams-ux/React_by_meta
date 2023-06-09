/*
JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, 
like a <div>...</div> or an empty <>...</> wrapper:
*/

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}


//If you have a lot of HTML to port to JSX, you can use an online converter(https://transform.tools/html-to-jsx)
