import Authorization from "./Authorization/Authorization.jsx";


const ProfilePage = () => {

//    let auth = false;

    return (
        <div className="pointer-events-auto profile-page h-full w-full bg-white flex justify-center items-center flex-col z-1001">
            <Authorization />
        </div>
    )
}

export default ProfilePage;


// {auth ? <Authorization> : <Profile>}