import { Link } from 'react-router-dom';
import { x } from '@xstyled/styled-components';

const PageNavigation = (): JSX.Element =>
    (
        <x.nav
            display="flex"
            alignItems="center"
            p={10}
            w="100%"
        >
            <x.div
                w={10}
                h={10}
                bg="#141414"
            />
            <x.ul
                display="flex"
                ml="auto"
            >
                <x.li><Link to="/">Home</Link></x.li>
                <x.li ml={10}><Link to="/join">Join</Link></x.li>
                <x.li ml={10}><Link to="/test">Test</Link></x.li>
            </x.ul>
        </x.nav>
    );

export default PageNavigation;
