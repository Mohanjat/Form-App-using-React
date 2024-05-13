import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "", street: "", city: ""
    , state: "", postalCode: "", commments: false, candidates: false, offers: false,
    notification: ""
  })

  function changeHandler(event) {
    let { type, id, name, checked } = event.target;

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : event.target.value
        // [event.target.name]:event.target.value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Finally Printing the data');
    console.log(formData);
  }

  return (
    <div className='app'>

      <form className='form' onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name <sup className='required' >*</sup> </label>
        <input
          required
          type='text'
          placeholder='Abc'
          id='firstName'
          name='firstName'
          onChange={changeHandler}
        />


        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          placeholder='Choudhary'
          id='lastName'
          name='lastName'
          onChange={changeHandler}
        />


        <label htmlFor='email'>Email Address <sup className='required' >*</sup> </label>
        <input
          required
          type='text'
          placeholder='abc202@gmail.com'
          id='email'
          name='email'
          onChange={changeHandler}
        />


        <label htmlFor='country'>Country <sup className='required' >*</sup> </label>
        <select
          required
          placeholder='India'
          id='country'
          name='country'
          onChange={changeHandler}
        >
          <option value="India" >India</option>
          <option value="China" >China</option>
          <option value="Sri Lanka" >Sri Lanka</option>
          <option value="South Africa" >South Africa</option>
        </select>


        <label htmlFor='street'>Street Address</label>
        <input
          type='text'
          placeholder='Mangal Bazar Road'
          id='street'
          name='street'
          onChange={changeHandler}
        />


        <label htmlFor='city'>City <sup className='required' >*</sup> </label>
        <input
          required
          type='text'
          placeholder='Delhi'
          id='city'
          name='city'
          onChange={changeHandler}
        />


        <label htmlFor='state'>State/Province <sup className='required' >*</sup> </label>
        <input
          required
          type='text'
          placeholder='Delhi'
          id='state'
          name='state'
          onChange={changeHandler}
        />

        <label htmlFor='postalCode'>ZIP/Postal Code <sup className='required' >*</sup> </label>
        <input
          required
          type='number'
          placeholder='134301'
          id='postalCode'
          name='postalCode'
          onChange={changeHandler}
        />


        <fieldset  >
          <legend className='legend1'>By Email <sup className='required' >*</sup> </legend>
        
          <div className='box' >
            <div className='checkBox' >
              <input
                type='checkbox'
                id='commments'
                onChange={changeHandler}
                name='commments'
                checked={formData.commments}
                className='boxCheck'
              >
              </input>

              <label htmlFor='commments'>Comments</label>

            </div>

            <p className='para' >Get notified when someone posts a comment on a posting.</p>

          </div>

          <div className='box' >
            <div className='checkBox' >
              <input
                type='checkbox'
                id='candidates'
                onChange={changeHandler}
                name='candidates'
                checked={formData.candidates}
                className='boxCheck'
              >
              </input>
              <label htmlFor='candidates'>Candidates</label>
            </div>
            <p className='para' >Get notified when a candidate applies for a job.</p>
          </div>

          <div className='box'>
            <div className='checkBox'>

              <input
                type='checkbox'
                id='offers'
                onChange={changeHandler}
                name='offers'
                checked={formData.offers}
                className='boxCheck'
              >
              </input>
              <label htmlFor='offers'>Offers</label>
            </div>
            <p className='para' >Get notified when a candidate accepts or rejects an offer.</p>
          </div>

        </fieldset>


        <fieldset  >
          <legend>Push Notifications <sup className='required' >*</sup> </legend>
          <p className='para1' >These are delivered via SMS to your mobile phone</p>

          <div className='radio' >  
            <input
              type='radio'
              id="everythings"
              onChange={changeHandler}
              name='notification'
              value="Everything"
              className='checkRadio'
            >
            </input>

            <label id='everythings'>Everything</label>

          </div>

          <div className='radio'> 
            <input
              type='radio'
              id="sameAsEmail"
              onChange={changeHandler}
              name='notification'
              value="Same As Email"
              className='checkRadio'
            >
            </input>

            <label id='sameAsEmail'>Same As Email</label>

          </div>

          <div className='radio'>
            <input
              type='radio'
              id="noPushNotification"
              onChange={changeHandler}
              name='notification'
              value="No Push Notification"
              className='checkRadio'
            >
            </input>

            <label id='noPushNotification'>No Push Notification</label>

          </div>

        </fieldset>

        <button className='save' >Save</button>

      </form>

    </div>

  );
}

export default App;
