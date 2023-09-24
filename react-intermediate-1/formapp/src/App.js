import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");


  // function changeFirstNameHandler(event){
  //   setFirstName(event.target.value)
  // }

  // function changeSecondNameHandler(event){
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState( 
    {
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
      isVisible: true,
      mode: "",
      favCar:""
    }
  )



  function changeHandler(event){

    const {name, value, checked, type} = event.target;
    

    setFormData( (prevFormData) => {
      
      return {
        ...prevFormData,
        [name] : type ==="checkbox" ? (checked) : (value)
      }
  })
}

function submitHandler(e){
  e.preventDefault();
  console.log(formData)


}

  return (
    <div className="App">
      <form onSubmit={submitHandler}>


        <label>Enter Name: </label>
        <input type="text"
        placeholder="Your First Name"
        // onChange={changeFirstNameHandler} 
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
        />

        <br/>
        <br/>

        <label>Enter Last Name: </label>
        <input type="text"
        placeholder="Your Last Name"
        // onChange={changeSecondNameHandler} 
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}
        />

        <br/>
        <br/>

        <label>Enter Email: </label>
        <input type="email"
        placeholder="Your Email"
        // onChange={changeSecondNameHandler} 
        onChange={changeHandler}
        name="email"
        value={formData.email}
        />

        <br/>
        <br/>

        <label>Description: </label>
        <textarea 
        placeholder='Enter desc...'
        onChange={changeHandler}
        name="comment"
        value={formData.comment}
        ></textarea>

        <br/>
        <br/>

        <input type="checkbox"
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
         />
         
        <label htmlFor="isVisible">Is Visible? </label>


        <br/>
        <br/>

        <input type="radio"
        onChange={changeHandler}
        name='mode'
        value="Online Mode"
        id="online-Mode"
        checked={formData.mode === "Online Mode"}
        />
        <label htmlFor='online-Mode'>Onlien Mode</label>

        <input type="radio"
        onChange={changeHandler}
        name='mode'
        value="Offline Mode"
        id="ofline-Mode"
        checked={formData.mode === "Offline Mode"}
        />
        <label htmlFor='ofline-Mode'>Offline Mode</label>

<br/>
<br/>

        <select onChange={changeHandler}
        name='favCar'
        id='favCar'
        value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">thar</option>
          <option value="bmw">BMW</option>
          <option value="honda">Honda</option>
        </select>

        <br/>
        <br/>
        {/* <input type="submit"/> */}
        <button>Submit</button>

        <p>FirstName is: {formData.firstName}</p>
        <p>lastName is: {formData.lastName}</p>
        <p>Email is: {formData.email}</p>
        <p>Desc is: {formData.comment}</p>

      </form>
    </div>
  );
}

export default App;
