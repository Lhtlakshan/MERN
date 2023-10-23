import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const User = () => {

   const [users , setUsers] = useState([]);

   useEffect(()=>{
     axios.get("http://localhost:8081")
     .then(result=> setUsers(result.data))
     .catch(err=> console.log(err))
   },[])

   const handleDelete = (id)=>{
     axios.delete('http://localhost:8081/deleteUser/'+id)
     .then(res=> {console.log(res)
      window.location.reload()})
     .catch(err=>console.log(err))
   }
     return (
       <div className="flex items-center justify-center h-[400px] bg-slate-200">
         <div className="bg-[white] rounded-lg p-6">
           <Link to="/create" className="p-[10px] rounded-lg bg-slate-400 ">
             +Add
           </Link>
           <table className="m-[20px]">
             <thead>
               <tr className="pb-[20px]">
                 <th className="pr-[20px] pl-[20px]">Name</th>
                 <th className="pr-[20px] pl-[20px]">Email</th>
                 <th className="pr-[20px] pl-[20px]">Age</th>
                 <th className="pr-[20px] pl-[20px]">Action</th>
               </tr>
             </thead>
             <tbody>
               {users.map((user) => {
                 return (
                   <tr>
                     <td className="pr-[20px] pl-[20px]">{user.name}</td>
                     <td>{user.email}</td>
                     <td className="pr-[20px] pl-[20px]">{user.age}</td>
                     <td className="pr-[20px] pl-[20px]">
                       <button className="mr-[10px] h-[30px] w-[80px] rounded-lg bg-green-700 text-[white]">
                         <Link to={`/update/${user._id}`}>Update</Link>
                       </button>
                       <button
                         className="h-[30px] w-[80px] rounded-lg bg-red-600 text-[white]"
                         onClick={(e) => handleDelete(user._id)}
                       >
                         Delete
                       </button>
                     </td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
       </div>
     );
}

export default User;
