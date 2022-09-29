import React from 'react';
import './Activities.css'
const Activities = (props) => {
    const { name, details, age, img, time } = props.gym;
    return (

        <div className='activity-container'>
            <img className='activities' src={img} alt="" />
            <div className='info'>
                <h5 className='item'><b>{name}</b></h5>
                <p> <small>{details.slice(0, 70) + '...'}</small></p>
                <p>For age: <b>{age}</b> </p>
                <p>Time required: <b>{time}</b> s</p>
            </div>
            <button className='btn-list btn btn-primary rounded mt-1'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activities;