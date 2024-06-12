import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addcourse = () => {
    const [data, setData] = useState(
        {
            "title": "",
            "description": "",
            "date": "",
            "duration": "",
            "venue": "",
            "tname": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8081/add", data).then(
            (response) => {
                setData(response.data)
                if (response.data.status == "success") {
                    alert("Added Succesfully")

                } else {
                    alert("error")

                }
            }
        ).catch(
            (err) => {
                alert(err.message)
            }
        ).finally()
    }




  return (
    <div>
    <div>
           <Navbar/> 
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course Title</label>
                                <input type="text" className="form-control" name='title' id='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course Description</label>
                                <input type="text" className="form-control" name='description' id='description' value={data.description} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" name="date" id="date" className="form-control" value={data.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" name='duration' id='duration' value={data.duration} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Venue</label>
                                <input type="text" className="form-control" name='venue' id='venue' value={data.venue} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Trainer Name</label>
                                <input type="text" className="form-control" name='tname' id='tname' value={data.tname} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="btn btn-success" onClick={readValue}>Submit</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Addcourse
