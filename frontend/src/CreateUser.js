import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const [name , setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8081/createUser", { name, email, age })
          .then((result) => {
            console.log(result);
            navigate('/');  
          });
    }

  return (
    <div className="flex justify-center h-[500px] bg-slate-200 items-center">
      <div className="bg-[white] rounded-lg p-6">
        <form onSubmit={Submit}>
          <h2 className="text-[30px] font-bold">Add user</h2>

          <div className="m-[15px] flex-col flex">
            <label htmlFor="" className="pr-[10px] font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control p-[5px] border-[2px] rounded-lg"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="m-[15px] flex-col flex">
            <label htmlFor="" className="pr-[10px] font-bold">
              Age
            </label>
            <input
              type="text"
              placeholder="Enter age"
              className="form-control p-[5px] border-[2px] rounded-lg"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="m-[15px] flex-col flex">
            <label htmlFor="" className="pr-[10px] font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control p-[5px] border-[2px] rounded-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button className="p-2 bg-green-600 rounded-lg text-[#ffffff]">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;