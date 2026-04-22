import { useState } from "react";

export default function App(){

    const users = [
        { id:1 ,name: "Ali", Age: 18,  bio: "Frontend Developer" },
        { id:2 ,name: "Sara", Age: 26, bio: "UI Designer" },
        { id:3 ,name: "Omid", Age: 23, bio: "Student" },
        { id:3 ,name: "hamed", Age: 23, bio: "officer" },
        { id:3 ,name: "naveed", Age: 30, bio: "manager" },
        { id:3 ,name: "hamid", Age: 28, bio: "IT manager" },

    
    ]
    
    const [selectuser, setSelectUser] = useState([0])
    
    function handleselectedUser(user){
        setSelectUser(user)
        
        }
        
        return <div className="container">
        
        <Usernames   handleselectedUser = {handleselectedUser} users={users} />
        <Userdetails handleselectedUser = {handleselectedUser} selectuser = {selectuser} />


    </div>
    }
    




function Usernames({ handleselectedUser, users }) {
    return (
        <div className="userNamesCardContainer">
            <h3 className="title">Users</h3>

            {users.map((v) => (
                <div 
                    key={v.id}
                    className="userNameCards" 
                    onClick={() => handleselectedUser(v)}
                >
                    {v.name}
                </div>
            ))}
        </div>
    );
}
   



function Userdetails({selectuser}){
    return <div className="userDetailsCard">
                <h3 className="title">User Detail</h3>
                <h2>{selectuser.name}</h2>
                <p>{selectuser.Age}</p>
                <p>{selectuser.bio}</p>
            </div>
}
  

        
        

