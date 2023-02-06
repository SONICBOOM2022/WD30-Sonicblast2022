import Login from "./Login";
import {useOutletContext} from 'react-router-dom'


function Main() {
    const {user} = useOutletContext()
    return(

        <div className="main-body">
            <div className="row">                
                <div className="col-8 bg-dark">
                    {/* Main content body */}
                    Hello {user}!
                </div>
                <div className="col-4 bg-light">
                    <div className="row">
                        <div className="col-6">
                        {/* Login */}
                        <Login></Login>
                        </div>
                        <div className="col-6 bg danger">
                            <img src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg" width='90%' height='200px' alt="image"></img>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Main;