import React from "react";
import { useForm } from "./useForm";

export const FormPractice = () => {
  const pass = "jsx";

  const initialState = {
    nickName: "",
    password: "",
    accept: false,
    message: "",
    framework: "",
    car: "",
  };

  const { dataForm, handleForm, resetDataForm } = useForm(initialState);

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
    resetDataForm(initialState);
  };

  return (
    <div>
      <h1 style={{ margin: "30px 30px" }}>Adrian-Form</h1>
      <form className="form-container" onSubmit={submit}>
        <input
          type="text"
          name="nickName"
          onChange={handleForm}
          placeholder="nickName"
          value={dataForm.nickName}
        />
        <input
          type="text"
          name="password"
          onChange={handleForm}
          placeholder="password"
          value={dataForm.password}
        />
        <div>
          <input
            type="checkbox"
            name="accept"
            id="accept"
            onChange={handleForm}
            checked={dataForm.accept}
          />
          <label htmlFor="accept">Acepta?</label>
        </div>
        <textarea
          name="message"
          onChange={handleForm}
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
            onChange={handleForm}
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
            onChange={handleForm}
            id="Vue"
            value={"Vue"}
            checked={dataForm.framework === "Vue"}
          />
          <label htmlFor="Vue">Vue</label>
        </div>
        <select name="car" onChange={handleForm}>
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
