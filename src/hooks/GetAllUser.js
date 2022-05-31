import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

export default function GetAllUser() {
    const [state,setState] = useState(null)
    
    const URL = `http://localhost:8000/users`
    let history = useNavigate();

    useEffect(() => {
            const getData = async () => {
                Axios.get(URL)
                    .then(res => {
                        // console.log(res);
                        setState(res)
                        
                        // setProfile(res.data.data);
                        // if (res.data.token) {
                        //     console.log("berhasil")
                            
                        // }
                    }).catch(error => {
                        // this.setError()
                        console.log(error)
                        if (error.response) {
                            console.log("--------------------------------------------------")
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            if (error.response.status === 401) {
                                history("/Login");
                                swal({
                                    title: "Error",
                                    text: "Mohon Login Terlebih Dahulu",
                                    icon: "error",
                                });
                            }
                            console.log(error.response.headers);
                        } else if (error.request) {
                            console.log("*************************")

                            // The request was made but no response was received
                            // error.request is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            console.log("++++++++++++++++++++++++")
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    })
            }
            getData();
            // console.log(profile)
        
    },
        []);
        return  state
}
