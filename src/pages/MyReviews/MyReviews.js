import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import ReviewsRow from "./ReviewsRow";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://service-review-server-one.vercel.app/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://service-review-server-one.vercel.app/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            const remaining = reviews.filter((rvs) => rvs._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Container>

        <>
            {
                reviews.length === 0 ?
                <>
                <div className="text-center mt-5">
                <h2>No Review were added</h2>
                </div>
                </>
                 
                 :
                 <>
                    <Table striped bordered hover>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Review</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewsRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></ReviewsRow>
            ))}
          </tbody>
        </Table>
                 </>
            }
        </>

        {/* review table start */}
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Review</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewsRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></ReviewsRow>
            ))}
          </tbody>
        </Table> */}

        <ToastContainer />
      </Container>
    </div>
  );
};

export default MyReviews;
