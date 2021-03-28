import { UIStyle } from "./userInfo.styles"

function UserInfo({ user }) {
    console.log(user)
    const { profilePicture, firstName, lastName, email, position } = user
    const name = `${firstName} ${lastName}`
    return (
        <UIStyle>
            <img src={profilePicture} alt={name} />
            <h3>{position}</h3>
            <p className="name">{name}</p>
            <p>{email}</p>
        </UIStyle>
    )
}

export default UserInfo