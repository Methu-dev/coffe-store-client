import { useState } from "react";
import { useLoaderData } from "react-router-dom"


const Users = () => {
    const usersLoder = useLoaderData()
    const [user, setUser]= useState(usersLoder)
    const handleDeleteBtn = id =>{
       fetch(`http://localhost:5000/users/${id}`,{
        method: 'DELETE',
       })
       .then(res => res.json())
       .then(data =>{
        if(data.deletedCount > 0){
            console.log('delete successfully')
            //remove the user
            const remainingUser = user.filter(use => use._id !== id)
            setUser(remainingUser)
        }
       })
    }
  return (
    <div>
      <h1>Users is on: {usersLoder.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button onClick={() => handleDeleteBtn(user._id)} className="btn">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users
