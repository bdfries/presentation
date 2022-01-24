import DefaultLayout from '../layouts/DefaultLayout';

const HomePage = (): JSX.Element =>
    (
        <DefaultLayout>
            <h1>Home Page</h1>
            <h3>Enter the code</h3>
            <input type="text" />
            <button>Join</button>
        </DefaultLayout>
    );

export default HomePage;
