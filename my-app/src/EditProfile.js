import { useState  } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditProfile = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('editprofileprops', location)

  const[uname,setUserName] = useState(location.state.uname);
  const[fname,setFirstName] = useState(location.state.fname);

  const submit = () => {
    console.log(uname);
    console.log(fname);
    //props.parentCallback(uname,fname);
    navigate('/', {
      state: {
        fname: fname,
        uname: uname
      }
    });
  }

    return (
      <div className="App">
        <h1>EditProfile</h1>
        <label>username</label>
        <br/>
        <input type="text" value={uname} onChange={(event)=> setUserName(event.target.value)}/>
        <br/>
        <label>FirstName</label>
        <br/>
        <input type="text" value={fname} onChange={(event)=> setFirstName(event.target.value)}/>
        <br/>
        <br/>
        <button type="submit" onClick={submit}>submit</button>
      </div>
    );
  }

  export default EditProfile;