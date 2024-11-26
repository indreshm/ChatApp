import React from 'react'
import User from './User';
import userGetAllUsers from '../../context/userGetAllUsers';


function Users() {
    const [allUsers,loading] = userGetAllUsers();
    console.log(allUsers);
    return (
    <div style={{maxHeight: "calc(75vh)"}} className=' py-2 flex-indresh overflow-y-auto'>
        {/* <Users></Users> */}


        {allUsers.map( (user,index)=>{
            return  <User key={index} user={user} />
        })}

    </div>
    );
}

export default Users
