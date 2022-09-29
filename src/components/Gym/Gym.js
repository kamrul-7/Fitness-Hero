import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Gym.css'

const Gym = () => {
    const [gyms, setGyms] = useState([])
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setGyms(data));
    }, [])

    return (
        <div className='activities-container'>
            <div className="activities-container">
                {
                    gyms.map(gym => <Activities
                        key={gym.id}
                        gym={gym}
                    ></Activities>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Gym;