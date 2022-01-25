import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';

const JoinPage = (): JSX.Element => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <h1>Join a Presentation</h1>
            <input type="number" placeholder="Enter Code" onChange={e => setCode(e.target.value)} />
            <button onClick={() => {
                if (code) {
                    navigate(`/presentation/${code}`);
                }
            }}>Join</button>
        </DefaultLayout>
    );
}

export default JoinPage;
