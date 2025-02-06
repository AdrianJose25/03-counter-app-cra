import React, { useState } from "react";

export const FormPractice = () => {
  const pass = "jsx";

  //form-object
  const [dataForm, setDataForm] = useState({
    nickName: "",
    password: "",
    accept: false,
    message: "",
    framework: "",
    car: "",
  });

  //updater-function
  const handleform = (e) => {
    const { name, value, type, checked } = e.target;
    setDataForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(dataForm);

  //form-submit-function
  const submit = (e) => {
    e.preventDefault();
    if (dataForm.password === pass) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
      console.log("Puede ingresar");
    } else {
      console.log("No puede ingresar");
    }

    console.log(dataForm);
  };

  return (
    <div>
      <h1 style={{ margin: "30px 30px" }}>Adrian-Form</h1>
      <form className="form-container" onSubmit={submit}>
        <input
          type="text"
          name="nickName"
          onChange={handleform}
          placeholder="nickName"
          value={dataForm.nickName}
        />
        <input
          type="text"
          name="password"
          onChange={handleform}
          placeholder="password"
          value={dataForm.password}
        />
        <div>
          <input
            type="checkbox"
            name="accept"
            id="accept"
            onChange={handleform}
            checked={dataForm.accept}
          />
          <label htmlFor="accept">Acepta?</label>
        </div>
        <textarea
          name="message"
          onChange={handleform}
          placeholder="your message"
          cols="30"
          rows="10"
          value={dataForm.message}
        />
        Favorite Framework
        <div>
          <input
            type="radio"
            name="framework"
            onChange={handleform}
            id="React"
            value={"React"}
            checked={dataForm.framework === "React"}
          />
          <label htmlFor="React">React</label>
        </div>
        <div>
          <input
            type="radio"
            name="framework"
            onChange={handleform}
            id="Vue"
            value={"Vue"}
            checked={dataForm.framework === "Vue"}
          />
          <label htmlFor="Vue">Vue</label>
        </div>
        <select name="car" onChange={handleform}>
          <option value="">-- Choose --</option>
          <option value="Audi">Audi</option>
          <option value="Mercedez">Mercedez</option>
          <option value="Chevrolet">Chevrolet</option>
        </select>
        <button type="submit">Check</button>
      </form>
    </div>
  );
};
