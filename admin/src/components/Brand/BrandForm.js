import React from "react";
import Validate from "../SignUp/ValidateInfo";
import userForm from "../SignUp/UserForm";
function BrandForm({ submitForm,EditData,children }) {
  const {
    handlechange,

    handleSubmit,
    errors,
  } = userForm({ handler, Validate });
//   console.log("22222222", values);

  function handler(values) {
    // console.log("222222222", values)
    submitForm(values)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            // value={EditData.name}
            // value={values.name}
            onChange={(e) =>handlechange(e, 'name')}
          />
          {errors.name && <p> {errors.name} </p>}
        </div>
        <div class="form-group">
          <label for="Description">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter Description"
            // value ={EditData.description}
            // value={values.description}
            onChange={(e) =>handlechange(e, 'description')}
          />
          {errors.description && <p> {errors.description} </p>}
        </div>
        <button type="submit" class="btn btn-primary">
        {children}
        </button>
      </form>
    </div>
  );
}

export default BrandForm;
