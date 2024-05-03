import AuthContext from '@/context/AuthContext';
import React, { useState, useContext } from 'react';
import { Button } from '../ui/button';


const NameModal = () => {
    const [name, setName] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = () => {
        login(name);
        // Close the modal or navigate to another page
    };

    return (
        <div className="modal">
            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <Button size="xsm" onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default NameModal;
