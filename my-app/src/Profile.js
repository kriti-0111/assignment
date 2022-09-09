import { useNavigate,useLocation } from "react-router";
const Profile = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = () => navigate('/edit-profile', {
    state: {
      fname:  location.state.fname,
      uname: location.state.uname
    }
  });
  console.log('profileprops', location)

  return (
    <div className="App">
      <h1>Profile</h1>
      <button onClick={navigateTo}>Edit Profile</button>
      <br/>
      {location.state.uname?<span>UserName:{location.state.uname}</span> : <></>}
      <br/>
      {location.state.fname? <span>FirstName:{location.state.fname}</span> : <></>}
    </div>
  );
}
export default Profile;