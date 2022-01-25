import { Link } from 'react-router-dom';

const PageNavigation = (): JSX.Element =>
    (
        <nav>
            <h2>Page Navigation</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/join">Join</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
        </nav>
    );

export default PageNavigation;
