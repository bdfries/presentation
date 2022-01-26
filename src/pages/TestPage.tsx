import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import { RootState } from '../redux/rootReducer';

const TestPage = (): JSX.Element => {
    const { mainSocket } = useSelector((state: RootState) => state.socket);

    return (
        <DefaultLayout>
            <h1>Test Page</h1>
            <button onClick={() => {
                mainSocket.emit('set_next_slide', -1);
            }}>Previous Slide</button>
            <button onClick={() => {
                mainSocket.emit('set_next_slide', 1);
            }}>Next Slide</button>
        </DefaultLayout>
    );
}

export default TestPage;
