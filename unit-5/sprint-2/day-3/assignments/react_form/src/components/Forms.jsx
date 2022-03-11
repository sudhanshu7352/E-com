import { useEffect, useState } from "react";
import axios from "axios";

export const Form = () => {
  const [user, setUser] = useState({names:"",age:"",address:"",department:"",salary:"",married:""});
  const [show,setShow] =useState([])

  const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:3200/users",user).then(()=>{
          alert("submitted");
         // console.log(setUser)
        //   setUser({names:"",age:"",address:"",department:"",salary:"",married:""})
         setUser({names:"",age:"",address:"",department:"",salary:"",married:""})
        
      })
  }
  const handleChange =(e)=>{
      
   // console.log(e.target)
     let {id,value,checked,type} =e.target;
     value =type ==="checkbox" ? checked:value;
     setUser({...user,[id]:value})
  }
  const getData =()=>{
      axios.get("http://localhost:3200/users").then((res)=>{
        setShow(res.data)
      })
  }
  useEffect(()=>{
      getData()
  },[user])
  return (
    <div>
        <h2>Employees Details</h2>
      <form onSubmit={handleSubmit}>
      <input  type="text" id="names" onChange={handleChange} placeholder="enter name" />
      <input  type="number" id="age" onChange={handleChange} placeholder="enter age" />
      <input  type="text" id="address" onChange={handleChange} placeholder="enter address" />
      <br/> <br />
      <select name="" id="department"  onChange={handleChange}>
          <option value="">--Department--</option>
          <option value="sales">Sales</option> 
          <option value="finance">Finance</option> 
          <option value="purchase">Purchase</option> 
          <option value="marketing">Marketing</option> 
          </select>
      <input  type="number" id="salary" onChange={handleChange} placeholder="enter salary"/>
      <input type="checkbox" onChange={handleChange} id="married" />
      <input type="submit" value="Submit User" />
          </form>
          <h3>Registered Employees</h3>
          
          <table>
            <thead>
            <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Married</th>
              </tr>
            </thead>
            
             <tbody>
             {show.map((e)=>{
                         return < tr key={e.id}>
                         <td>{e.names}</td>
                         <td>{e.age}</td>
                         <td>{e.address}</td>
                         <td>{e.department}</td>
                         <td>{e.salary}</td>
                         <td>{e.married? "true":"false"}</td>
                         </tr>


                      
             })}
             </tbody>
          </table>
             
           
    </div>
  );
};
