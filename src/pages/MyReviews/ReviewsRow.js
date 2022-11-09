import React from 'react';

const ReviewsRow = ({review, handleDelete}) => {
    const {serviceName, message, _id} = review;

    

    return (
        
            <tr>
              <td>{serviceName}</td>
              <td>{message}</td>
              <td><button className='btn btn-info'>Update</button></td>
              <td><button onClick={()=> handleDelete(_id)} className='btn btn-danger'>Delete</button></td>
            </tr>
    
    );
};

export default ReviewsRow;