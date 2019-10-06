import React from 'react';
import Form from './Form';
import FormInformation from './FormInformation';

const ReservationForm = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center position-relative pb-5">
                <FormInformation />
                <Form />
            </div>
        </div>
    );
};

export default ReservationForm;
