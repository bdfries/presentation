import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

import DefaultLayout from '../layouts/DefaultLayout';

import { RootState } from '../redux/rootReducer';

const JoinPage = (): JSX.Element => {
    const [code, setCode] = useState('');
    const { mainSocket } = useSelector((state: RootState) => state.socket);
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <h1>Join a Presentation</h1>
            <input type="number" placeholder="Enter Code" onChange={e => setCode(e.target.value)} />
            <button onClick={() => {
                if (code) {
                    mainSocket.emit('join_presentation', code);
                    navigate(`/presentation/${code}`);
                }
            }}>Join</button>
        </DefaultLayout>
    );
}

export default JoinPage;
