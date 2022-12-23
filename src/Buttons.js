import React, { useState } from "react";


const Buttons = ({name}) => {
    const [formData, setFormData] = useState({
        "entry.2037917220": "",
        "entry.828730649":  ""
      });
    const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [input]: value
        }));
      };

    return (
        <fieldset>
        <label htmlFor={name}>Enig</label>
        <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="0"
            autoComplete={false}
        />
        <label htmlFor={name}></label>
        <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="1"
            autoComplete={false}
        />
          <label htmlFor={name}></label>
          <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="2"
            autoComplete={false}
          />
           <label htmlFor={name}></label>
           <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="3"
            autoComplete={false}
          />
           <label htmlFor={name}></label>
        <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="4"
            autoComplete={false}
          />
          <label htmlFor={name}></label>
        <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="5"
            autoComplete={false}
          />
          
          <input
            required
            type="radio"
            name={name}
            onChange={handleInputData({name})}
            value="6"
            autoComplete={false}
          />
          <label htmlFor={name}>Ikke enig</label>
    </fieldset>
    )

}

export default Buttons;