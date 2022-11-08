import React, { useEffect, useState } from 'react';
import AllServicesDetails from '../AllServicesDetails/AllServicesDetails';
import './AllServices.css';

const AllServices = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
            <h3>SAM Kitchen's all services are here.{services.length}</h3>
            <div className="allService">
                {
                    services.map(service => <AllServicesDetails
                        key={service._id}
                        service={service}
                    >
                    </AllServicesDetails>)
                }
            </div>
        </div>
    );
};

export default AllServices;