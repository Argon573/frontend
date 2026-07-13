import Authorization from "./Authorization/Authorization.jsx";
import AuthContext from "../../context/AuthContext.jsx"
import Profile from './Profile/Profile.jsx'
import {useContext} from "react";

const ProfilePage = () => {

    const auth = useContext(AuthContext);

    console.log(auth);

    return (
        <div className="pointer-events-auto profile-page h-full w-full bg-green-500 bg-cover bg-center flex justify-center items-center flex-col z-1001 ">
            {auth.auth ? <Profile /> : <Authorization />}
        </div>
    )
}

export default ProfilePage;

