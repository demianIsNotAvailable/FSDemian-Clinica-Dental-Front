import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import "./Admin.css";
import { bringUsersByRole, findUsers, updateUserData } from "../../services/apiCalls";
import { toedit } from "../editSlice";
import { Form } from "react-bootstrap";


export const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminReduxData = useSelector(userData);
  const [users, setUsers] = useState([]);
  const [finder, setFinder] = useState("");
  const [userDetail, setUserDetail] = useState({})
  const [updateRole, setUpdateRole] = useState("")

  const inputHandler = (e) => {
    setFinder(e.target.value);
  };

  useEffect(() => {
    if (finder !== "") {
      const bringUsers = setTimeout(() => {
        findUsers(adminReduxData.credentials.token, finder)
          .then((res) => {
            setUsers(res.data);
          })
          .catch((err) => console.error(err));
      }, 500);

      return () => clearTimeout(bringUsers);
    } else {
      findUsers(adminReduxData.credentials)
        .then((results) => {
          setUsers(results.data);
        })
        .catch((err) => console.error(err));
    }
  }, [finder]);


  useEffect(()=> {
    if (updateRole !== "") {
      userDetail.role = updateRole
      updateUserData(userDetail, adminReduxData.credentials.token)
      
    }
  }, [updateRole])



  const bringUsersHandler = (role) => {
    bringUsersByRole(adminReduxData.credentials.token, role)
      .then((res) => {
        setUsers(res.data);
      })
      .then(() => {
        setUserDetail({})
      })
      .catch((err) => console.error(err));
  };



  const detailHandler = (user) => {
    setUserDetail({
      id: user._id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      role: user.role
  })  
  }

  const editHandler = (userData) => {
    const editData = {
      id: userData.id,
      email: userData.email,
      phone: userData.phone
    }


    
    dispatch(toedit({data: editData}))

    setTimeout(() => {
      navigate("/profileedit")
    }, 200)  
    
  }




  return (
    <div className="adminDesign">
      <div className="adminContainer">
        <input type="text" className="adminInput" placeholder="find user" onChange={(e) => inputHandler(e)}></input>

        <div className="adminButtonContainer">
          <button className="formContainerButtonDesign" onClick={() => bringUsersHandler("user")}>User List</button>
          <button className="formContainerButtonDesign" onClick={() => bringUsersHandler("doctor")}>Doctor List</button>
          <button className="formContainerButtonDesign" onClick={() => bringUsersHandler("admin")}>Admin List</button>
        </div>
      </div>

      <div className="resultsContainerDesign">
        <div className="resultsContainer">
          <div className="resultsPadding">
            <div className="results">
              {users.length > 0 && (
                <>
                  {users.map((user) => {
                    return (
                      <div className="userDataContainer" key={user._id} onClick={() => detailHandler(user)}>{user.name} {user.lastname}</div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="resultsContainer">
          <div className="results" id="detail">
          {userDetail.name && (
              <>
                <div className="userDataContainer">id: {userDetail.id}</div>
                <div className="userDataContainer">name: {userDetail.name}</div>
                <div className="userDataContainer">lastname: {userDetail.lastname}</div>
                <div className="userDataContainer">email: {userDetail.lastname}</div>
                <div className="userDataContainer">phone: {userDetail.phone}</div>
                <div className="userDataContainer">role: {userDetail.role}</div>
                <Form.Group style={{ display: 'flex', alignItems: 'center' }}>
                  <Form.Select name={"role"} style={{ margin: '10px' }} defaultValue={userDetail.role} onChange={(e) => setUpdateRole(e.target.value)}>
                    <option value="USER">user</option>
                    <option value="DOCTOR">doctor</option>
                    <option value="ADMIN">admin</option>
                  </Form.Select>
                </Form.Group>
                <button className="formContainerButtonDesign" onClick={() => editHandler(userDetail)}>Edit User</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
