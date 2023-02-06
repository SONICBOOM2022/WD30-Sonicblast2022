import Profile from "../Profile";

function App() {
  // const number = 1;
  // const profile_image = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
  // const img = './img.jpg' - then change the {profile_image} with {img} (make sure the image file is in the public folder)
  const image =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <img src={image} width="150"></img>
      <Profile name="Ramil" job="Bystander" past_job="Sniffer"></Profile>
    </div>

    // <p style={{
    //   textAlign: 'center',
    //   color: 'red'
    // }}>
    //   {/* {number}       */}
    //   <img src={profile_image} height="90" width="150"></img>
    //   <HelloWorld city="Bacoor, Cavite" name="Ramil"></HelloWorld>

    //   {/* <div style={{backgroundColor: 'blue', width: '100px', height: '100px'}}>
    //       <p style={{color: 'white'}}>How are you?</p>
    //   </div> */}
    //   {/* <div className="navbar">
    //       <ul>
    //         <li>1</li>
    //         <li>2</li>
    //         <li>3</li>
    //         <li>4</li>
    //         <li>5</li>
    //       </ul>
    //   </div> */}
    // </p>
  );
}

export default App;
