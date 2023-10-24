import React, { useEffect, useState } from 'react'

const FormApp = () => {
    const [formData, setformData] = useState({
        firstName: '',
        lastName:'', 
        email: ''
    });

    const changeHandler = (event) => {
        let {name, value} = event.target;
        setformData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        const savedResponse = fetch(`${process.env.REACT_APP_BASE_URL}/add`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .catch(e => console.log(e));

        console.log(savedResponse)

    //    savedResponse.then((data) => {
    //     console.log(data)
    //    }).catch((e) => {
    //     console.log(e)
    //    })
    }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <br/><br/>

        <label>Enter firstname</label>
        <input type="text" placeholder='Enter firstname' onChange={changeHandler} name='firstName' required />

        <br/><br/>

        <label>Enter lastName</label>
        <input type="text" placeholder='Enter lastName' onChange={changeHandler} name='lastName' required />

        <br/><br/>

        <label>Enter email</label>
        <input type="email" placeholder='Enter email' onChange={changeHandler} name='email' required />

        <br/><br/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormApp;
