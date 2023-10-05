import axios from 'axios'
import React, { useEffect, useState} from 'react'
import TodoCard from './TodoCard';
import { Row, Col } from "react-bootstrap";

const baseURL = "https://jsonplaceholder.typicode.com/todos";

const Body = () => {
const [actualdata, setActualdata] = useState([]);
  async function getData(){
    try{
      const {data} = await axios.get(baseURL);
     setActualdata(data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
   getData();
  },[])
  const deleteHandler =(id)=>{
    const filterArray = actualdata.filter(obj=>obj.id!==id);
    setActualdata(filterArray);
  }
  return (
    <Row>
    {
         actualdata.map(({id,userId,title,completed})=>{
       return (
             <Col key={id} sm={12} md={6} lg={4} xl={3}>
            <TodoCard id={id} userId={userId} title={title} completed={completed} ondelete={deleteHandler}/>
            </Col>
          );
      })
    }
    </Row>
  )
}

export default Body
