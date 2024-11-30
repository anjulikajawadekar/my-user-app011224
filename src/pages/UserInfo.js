import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams(); // Extract user ID from the URL
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  // Fetch users if not already loaded
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  // Find the selected user by ID
  const selectedUser = users?.find((user) => user.id.toString() === id);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error fetching user details.</p>;

  if (!selectedUser) {
    return <p>User not found!</p>;
  }

  const { name, username, email, phone, website, address, company } = selectedUser;

  return (
    <div className="container mt-4">
      <div className=" mb-4 home-back">
        <h1 className="mb-0">User Details</h1>
        <Link to={`/`} className="btn btn-primary btn-md">
          Back to User List
        </Link>
      </div>

      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>{name}</h2>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="card-body">
              {/* Personal Information */}
              <h5>Personal Information</h5>
              <ul className="list-group mb-3">
                <li className="list-group-item">
                  <strong>Username:</strong> {username}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {email}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {phone}
                </li>
                <li className="list-group-item">
                  <strong>Website:</strong>{" "}
                  <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
                    {website}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="card-body">
              {/* Address */}
              <h5>Address</h5>
              <ul className="list-group mb-3">
                <li className="list-group-item">
                  <strong>Street:</strong> {address.street}
                </li>
                <li className="list-group-item">
                  <strong>Suite:</strong> {address.suite}
                </li>
                <li className="list-group-item">
                  <strong>City:</strong> {address.city}
                </li>
                <li className="list-group-item">
                  <strong>Zipcode:</strong> {address.zipcode}
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="card-body">



          {/* Company */}
          <h5>Company Details</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {company.name}
            </li>
            <li className="list-group-item">
              <strong>Catchphrase:</strong> {company.catchPhrase}
            </li>
            <li className="list-group-item">
              <strong>Business:</strong> {company.bs}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
