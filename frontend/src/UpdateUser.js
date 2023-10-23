import React from 'react'
import { useState , useEffect} from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {

  const {id} = useParams();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/getUser/"+id)
      .then((result) => {
        console.log(result)
        setName(result.data.name);
        setAge(result.data.age);
        setEmail(result.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/updateUser/"+id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      });
  };
  
  return (
    <div className="flex justify-center h-[500px] bg-slate-200 items-center">
      <div className="bg-[white] rounded-lg p-6">
        <form onSubmit={Update}>
          <h2 className='text-[25px] font-bold'>Update user</h2>

          <div className="m-[20px]">
            <label htmlFor="" className="pr-[10px]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="m-[20px]">
            <label htmlFor="" className="pr-[10px]">
              Age
            </label>
            <input
              type="text"
              placeholder="Enter age"
              className="form-control"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="m-[20px]">
            <label htmlFor="" className="pr-[10px]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button className="p-2 bg-green-500 rounded-lg">
          Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser
