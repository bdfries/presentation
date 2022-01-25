import DefaultLayout from '../layouts/DefaultLayout';

const JoinPage = (): JSX.Element => (
    <DefaultLayout>
        <h1>Join a Presentation</h1>
        <input type="text" placeholder="Enter Code" />
        <button>Join</button>
    </DefaultLayout>
)

export default JoinPage;
