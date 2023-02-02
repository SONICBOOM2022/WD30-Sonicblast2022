import Count from '../Count'
import Login from './Login'

function Main() {
    return(
        <div className="main-body">
            <div className='row'>
                <div className='col-8'>
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLSOKjYhb3md0cz3to10f5KR0mHhC7EM_hb2TNFJjniJrl3bMZUy1BaQvbWlAxe6XCtbvLQIK0oyc3wDCrSZ2Kf63dpuSOrtqMfrGQEQqpB-yCBnVAde1WizLPBBL_eylka9ZLUsZRLBF3eyBCZiVDXylqDm4L-HWHMuEIi9eaQ1RortQDmCbFcjrn/s780/Shipping%20Container%20Home%20on%20Steep%20Slope,%20Marin,%20California%200.jpg" width="1020"/>
                </div>
                <div className='col-4 bg-light'>
                    <div className='row'>
                        <div className='col-6'>
                            <Login />
                        </div>
                        <div className='col-6 bg-danger p-0'>
                            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt='image' height='100%' width='100%' className='img-responsive'></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    ) 
}

export default Main;
