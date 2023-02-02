import HelloWorld from "./HelloWorld";

function App() {
  
  const profile_image = 'https://w0.peakpx.com/wallpaper/538/651/HD-wallpaper-sonic-black-red.jpg'

  return (
    <>      
      <img src={profile_image} height="200" width="150"></img>
      <HelloWorld name="Ramil" city="Bacoor, Cavite"></HelloWorld>
    </>
  );
}

export default App;
