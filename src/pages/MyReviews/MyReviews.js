import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])


    return (
        <div>
            <h2>This is my reviews section</h2>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <h2>you have {reviews.length} review</h2>
        </div>
    );
};

export default MyReviews;