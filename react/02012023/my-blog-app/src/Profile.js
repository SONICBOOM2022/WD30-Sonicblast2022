import TechStack from "./TechStack";


function Profile (props) {
    return(
        <>
            <p>
            {/* <img src={props.image} alt="profile name" height={100} width={100}></img><br /> */}
                My name is {props.name} and I am a {props.job}. I formerly worked as a {props.past_job}. <br />
                At the moment, i am currently studying these following tech stacks.<br />
                <TechStack></TechStack>
            </p>
        </>
    )
}

export default Profile;