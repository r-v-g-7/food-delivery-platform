import { ProfileDataContext } from "../App"
import { useContext } from "react"

const profileData = useContext(ProfileDataContext) 
const Profile = () => {
    console.log("Profile is setted up")
}

export default Profile