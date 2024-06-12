import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const SearchStudent = () => {

    const [data, setData] = useState(
        {
            "title": "",
        }
    )

    const [result, setResult] = useState([])

    const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8081/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.succes = "success") {
                    alert("successfully deleted")

                } else {
                    alert("error")
                }
            }
        ).catch()
    }





const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
}
const readValue = () => {
    axios.post("http://localhost:8081/search", data).then((response) => {
        setResult(response.data)
    }
    ).catch(
        (error) => {
            console.log(error)
        }

    ).finally()
}









return(
    <div>
        <Navbar />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-control">Course Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Course Title</th>
                                    <th scope="col">Course Description</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer Name</th>


                                </tr>
                            </thead>

                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.title}</td>
                                                <td>{value.description}</td>
                                                <td>{value.date}</td>
                                                <td>{value.duration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.tname}</td>
                                                <button className="btn btn-danger" onClick={() => {deleteCourse(value._id) }}>Delete</button>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>

    </div>
)
}

export default SearchStudent
