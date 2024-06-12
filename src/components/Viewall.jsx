import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const[data,changeData]=useState([])
    const fetchData = () =>{
        axios.get("http://localhost:8081/view").then(
        (response) => {
            changeData(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
    ).finally()
        }
    
    useEffect(()=>{fetchData()},[])
  return (
    <div>
       <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">



                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">title</th>
                                            <th scope="col">description</th>
                                            <th scope="col">duration</th>
                                            <th scope="col">venue</th>
                                            <th scope="col">tname</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{return   <tr>
                                            <th scope="row">{value.title}</th>
                                            <td>{value.description}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.tname}</td>
                                            
                                            
                                        </tr>}
                                       )}
                                       
                                    </tbody>
                                </table>





                            </div>
                        </div>

                    </div>
                </div>
            </div>



        
    </div>
  )
}

export default Viewall
