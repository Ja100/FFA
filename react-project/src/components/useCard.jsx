function Manage({name, role, avatar}){
    return(
        <div>
            <img src={avatar} alt="profile" />
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    )
}
export default Manage;