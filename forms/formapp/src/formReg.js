import React, { useState } from 'react'

const FormReg = () => {
    const [values,setValues]=useState({
        name:"",
        surname:"",
        email:""
    })
    // const [submit, setSubmit]=useState(false)
    const [valid, setValid]=useState(false)

    console.log(values)


    const handleForm=(e)=>{
        let {name, value} = e.target;
     e.preventDefault();
     if(values.name && values.surname && values.email){
        setValid(true);
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
     }
    //  setSubmit(true);
    }
  return (
    <>
    <form onSubmit={handleForm}>
        {/* {submit && valid ? <div>message successful</div>:null} */}
        <div>
            <input type="text" placeholder='name' name='name' value={values.name} onChange={(e)=>setValues(e.target.value)} />
            <span>Please enter a name</span>
        </div>
        <div>
            <input type="text" placeholder='surname' name='surname' value={values.surname} onChange={(e)=>setValues(e.target.value)} />
            <span>Please enter a surname</span>
        </div>
        <div>
        <input  type='text' placeholder='email' name='email' value={values.email} onChange={(e)=>setValues(e.target.value)}/>
        <span>Please enter a email</span>
        </div>
        <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default FormReg