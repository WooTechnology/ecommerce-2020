import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
	const [name, setName] = useState("");
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	//Getting token and user information from localStorage of client's browser
	const { token, user } = isAuthenticated();

	const goBack = () => (
		<div>
		  <Link className="btn btn-outline-success rounded mb-3" to="/admin/dashboard">
			Cancel
		  </Link>
		</div>
	  );
	  const handleChange = event => {
		setError("");
		setName(event.target.value);
	  };
	
	  const onSubmit = event => {
		event.preventDefault();
		setError("");
		setSuccess(false);
	
		//backend request fired
		createCategory(user._id, token, { name }).then(data => {
		  if (data.error) {
			setError(true);
		  } else {
			setError("");
			setSuccess(true);
			setName("");
		  }
		});
	  };
	
	  const successMessage = () => {
		if (success) {
		  return <h6 className="alert alert-success">Category created successfully</h6>;
		}
	  };
	
	  const warningMessage = () => {
		if (error) {
		  return <h6 className="alert alert-danger">Failed to create category</h6>;
		}
	  };
	
	  const myCategoryForm = () => (
		<form>
		  <div className="form-group">
			<input
			  type="text"
			  className="form-control my-3"
			  onChange={handleChange}
			  value={name}
			  required
			  placeholder="Enter your category here!"
			/>
			<div className="row">
				<div className="col-sm-3">
					<button onClick={onSubmit} className="btn btn-success rounded mb-3">Create Category</button>
				</div>
				<div className="col-sm-3">
					{goBack()}
				</div>
				{successMessage()}
			    {warningMessage()}
			</div>
		  </div>
		</form>
	  );
	
	  return (
		<Base
		  title="Create a category here"
		  description="Add a new category for your products"
		  className="container-fluid bg-success p-4 rounded"
		>
		  <div className="row bg-white rounded">
			<div className="col-md-8 offset-md-2">
			  {myCategoryForm()}
			</div>
		  </div>
		</Base>
	  );
};

export default AddCategory;
