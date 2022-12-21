import React, { useState } from "react";

const Form = () => {
  const [submit, setSubmit] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/d/1y7reHgxOP22lYBlZuvtleHsTyqYN8MB9aec4izyd8AA/formResponse?entry.1772277633=${formData["entry.1772277633"]}&entry.828730649=${formData["entry.828730649"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Takk for at du er interessert!</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.1772277633">Send tekst til Berta!</label>
              <input
                required
                type="text"
                name="entry.1772277633"
                onChange={handleInputData("entry.1772277633")}
                value={formData["entry.1772277633"]}
                autoComplete={false}
              />
            </fieldset>
            <fieldset>
            	<label htmlFor="entry.828730649">Enig</label>
				<input
					required
					type="radio"
					name="entry.828730649"
					onChange={handleInputData("entry.828730649")}
					value="0"
					autoComplete={false}
				/>
	            <label htmlFor="entry.828730649">1</label>
            	<input
               		required
                	type="radio"
                	name="entry.828730649"
                	onChange={handleInputData("entry.828730649")}
                	value="1"
                	autoComplete={false}
            	/>
              	<label htmlFor="entry.828730649">2</label>
              	<input
                	required
                	type="radio"
                	name="entry.828730649"
                	onChange={handleInputData("entry.828730649")}
                	value="2"
                	autoComplete={false}
              	/>
               	<label htmlFor="entry.828730649">3</label>
               	<input
                	required
                	type="radio"
                	name="entry.828730649"
                	onChange={handleInputData("entry.828730649")}
                	value="3"
                	autoComplete={false}
              	/>
               	<label htmlFor="entry.828730649">4</label>
            	<input
                	required
                	type="radio"
                	name="entry.828730649"
                	onChange={handleInputData("entry.828730649")}
                	value="4"
                	autoComplete={false}
              	/>
              	<label htmlFor="entry.828730649">5</label>
            	<input
                	required
                	type="radio"
                	name="entry.828730649"
                	onChange={handleInputData("entry.828730649")}
                	value="5"
                	autoComplete={false}
              	/>
              	
              	<input
                	required
                	type="radio"
                	name="entry.828730649"
                	onChange={handleInputData("entry.828730649")}
                	value="6"
                	autoComplete={false}
              	/>
              	<label htmlFor="entry.828730649">Ikke enig</label>
            </fieldset>

            <button type="submit">Send inn!</button>
          </form>

        )}
      </div>
    </div>
  );
};

export default Form;
