import './App.css';
import { useState } from 'react';

function App() {

  // setting formdata
  const [formData, setformData] = useState({
     
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      city:"",
      state:"",
      country:"",
  });

  //console.log(formData)

  function changeHandler(event){

    let {name, value, checked, type} = event.target;

    if(type === "radio"){
      Object.assign({formData}, {"push_notify":value})
    }

    if(type === "checkbox"){

      //console.log(name)

      if(checked){
        Object.assign({formData}, [name])
        setformData((prevState) => ({
          ...prevState,
          [name]: checked
        }))
      }else{
        setformData((prevState) => ({
          ...prevState,
          [name]: checked
        }))
      }

    }
    else{

      setformData((prevState) => ({
        ...prevState,
        [name] : value
      }))
    }

  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);

  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        {/* input fields */}
        <label>First Name: </label>
        <input name='firstName' value={formData.firstName} onChange={changeHandler} type="text" />

        <br/>
        <br/>

        <label>Last Name: </label>
        <input name='lastName' value={formData.lastName} onChange={changeHandler} type="text" />

        <br/>
        <br/>

        <label>Email Address: </label>
        <input name='email' value={formData.email} onChange={changeHandler} type="email" />

        <br/>
        <br/>

        <label>Enter Country: </label>
        <select name='country' onChange={changeHandler}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="West Indies">West Indies</option>

        </select>

        <br/>
        <br/>

        <label>Street Address </label>
        <input name='address' value={formData.address} onChange={changeHandler} type="text" />

        <br/>
        <br/>

        <label>City </label>
        <input name='city' value={formData.city} onChange={changeHandler} type="text" />

        <br/>
        <br/>

        <label>State </label>
        <input name='state' value={formData.state} onChange={changeHandler} type="text" />

        <br/>
        <br/>

        <label>Postal Code </label>
        <input name='code' value={formData.code} onChange={changeHandler} type="text" />

        <br/>
        <br/>

        {/*  */}

        <div className='input-section'>
          <label>By Email</label>
          <div className='input-wala'>
            <input type="checkbox" onChange={changeHandler} name='comments'  />
            <div className='inside-input-field'>
              <label>Comments</label>
              <label>Get notified when someones posts a comment on a posting.</label>
            </div>
          </div>

          <div className='input-wala'>
            <input type="checkbox" onChange={changeHandler} name='candidates'/>
            <div className='inside-input-field'>
              <label>Candidates</label>
              <label>Get notified when someones posts a comment on a posting.</label>
            </div>
          </div>

          <div className='input-wala'>
            <input type="checkbox" onChange={changeHandler} name='offers'/>
            <div className='inside-input-field'>
              <label>Offers</label>
              <label>Get notified when someones posts a comment on a posting.</label>
            </div>
          </div>
        </div>

        <br/>

        {/* radio-button-section */}
        <div className='radio-button-section'>
          <div>
            <div>Push Notifications</div>
            <div>These are delivered via SMS to your mobile phone.</div>
          </div>
          

          <div className='radio-input'>

            
            <div>
              <input type="radio" name='pushNotifications' value="everything" onChange={changeHandler} />
              <label>Everything</label><br/>
            </div>

            <div>
              <input type="radio" name='pushNotifications' value="same_as_email" onChange={changeHandler} />
              <label>Same as Email</label><br/>
            </div>

            <div>
              <input type="radio" name='pushNotifications' value="no_push_notifications" onChange={changeHandler} />
              <label>No push Notifications</label><br/>
            </div>

          </div>
        </div>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
