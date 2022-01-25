import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import { RootState } from '../redux/rootReducer';

const TestPage = (): JSX.Element => {
    const { mainSocket } = useSelector((state: RootState) => state.socket);
    console.log(mainSocket);

    return (
        <DefaultLayout>
            <h1>Test Page</h1>
            <button onClick={() => console.log('a')}>Next Slide</button>
        </DefaultLayout>
    );
}

export default TestPage;
