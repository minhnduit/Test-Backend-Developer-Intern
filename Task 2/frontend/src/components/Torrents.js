import React, {useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";


const Torrents = () => {
    const [torrents,setTorrents] = useState([]);
  
    const params = useLocation().search;
       useEffect(() => {
        const searchParams = new URLSearchParams(params);
        fetch("http://localhost:4000/search?"+ searchParams.toString() )
        .then(res => res.json())
        .then(res => {
            
            setTorrents(res)            
        }).catch(err => console.error(err));
    }, [params]);


    


function handleChange(e){
    const {id,name,value}=e.target;

    
    
    var newTorrents = [];
    torrents.map(function(object){
        if(object._id === id){
            newTorrents.push({ 
                ...object,
                [name]:value
            } )
        }else newTorrents.push(object);
        
        return newTorrents;
    }); 
 setTorrents(newTorrents);


    
    
  
};

function updateValue(){
    console.log(torrents);

   
    fetch('http:///localhost:4000/edit', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(torrents)
    
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    alert("Update successfully!! Please reload!")
    
    };

    return (
        <>
            <Form style={{ display: 'flex', marginBottom: '10px' }} action="/search" method="get">
                <Form.Control type="search" name="search" placeholder="Search Torrents!" />
                <Button variant="dark" style={{ height: '38px' }} type="submit">Search</Button>
            </Form>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                        <Button onClick={updateValue} variant="dark" style={{ width: '100%',margin:'1%' }} >Update</Button>
                       
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        torrents.map((itr,i) => (
                            <tr>
                                <td>{i + 1}</td>
                                
                                <td><input style={{background: "rgba(0, 0, 0, 0)",border: "none"}} key={itr._id} id ={itr._id} type="text" name="username" onChange={handleChange} defaultValue={itr.username} /></td>
                                <td><input style={{background: "rgba(0, 0, 0, 0)",border: "none"}} key={itr._id} id ={itr._id} type="text" name="email" onChange={handleChange} defaultValue={itr.email}/></td>
                                <td><input style={{background: "rgba(0, 0, 0, 0)",border: "none"}} key={itr._id} id ={itr._id} type="text" name="birthdate" onChange={handleChange} defaultValue={itr.birthdate.substr(0,10)}/></td> 
                                
                                 
                            </tr>
                            
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}


export default Torrents;