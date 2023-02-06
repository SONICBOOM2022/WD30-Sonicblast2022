import {useOutletContext} from 'react-router-dom'



function About() {
    const [user] = useOutletContext()

    return(
        <>
        Hello {user}
        </>


    )
}

export default About;