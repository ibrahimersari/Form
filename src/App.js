import './App.css';
import { useFormik } from 'formik';
function App() {

  const {handleSubmit, handleChange, values} = useFormik ({
      initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: "male",
      hobies: [],
      country: "",
  },
  onSubmit: (values) => {
    console.log(values);
    console.log('ibo');
  },
  });
  return (
    <div className="App">

  <h1>Sign Up</h1>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name='firstName' placeholder='İbrahim' onChange={handleChange} />

        <br/>
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input name='lastName' placeholder='Ersarı' onChange={handleChange} />

        <br/>
        <br/>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="ersarii76@gmail.com"
          type="email"
          onChange={handleChange}
        />
        <br/>
        <br/>
        <span>Male</span>
        <input
        type="radio"
        name="gender" 
        value="male"
        onChange={handleChange}
        checked={values.gender === "male"} 
        />

        <span>Female</span>
        <input 
        type="radio" 
        name="gender"
        value="female"
        // checked={values.gender === "female"}
        onChange={handleChange} />
        <br/>
        <br/>
        
        <div>
          <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
          Football
        </div>
        <div>
          <input type="checkbox" name="hobies" value="Music" onChange={handleChange} />
          Music
        </div>
        <div>
          <input type="checkbox" name="hobies" value="Photograph" onChange={handleChange} />
          Photograph
        </div>

        <br/>
        
          <select name='country' onChange={handleChange}>
              <option value="Turkey">Turkey</option>
              <option value="England">England</option>
              <option value="Brazil">Brazil</option>
              <option value="Usa">Usa</option>
          </select>

        <br />
        <br />

          <button type="submit">Submit</button>
        
        <br />
        <br />
        {/*{JSON.stringify(values)}*/}
      </form>
      }
    
    
      </div>

  );
}

export default App;
