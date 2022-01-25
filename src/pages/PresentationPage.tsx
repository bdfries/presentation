import { useEffect } from 'react';

import { io } from 'socket.io-client';

import DefaultLayout from '../layouts/DefaultLayout';

const PresentationPage = (): JSX.Element => {
    const socket = io('http://localhost:3004');

    useEffect(() => {
        socket.on('updated_slide_number', data => {
            console.log(data);
        });
    }, [socket]);
    
    return (
        <DefaultLayout>
            <h1>Presentation</h1>
        </DefaultLayout>
    );
}

export default PresentationPage;
