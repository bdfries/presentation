import { x } from '@xstyled/styled-components';

import PageNavigation from '../components/PageNavigation';
import PageFooter from '../components/PageFooter';

type DefaultLayoutProps = {
    children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element =>
    (
        <>
            <PageNavigation />
            <x.div px={12}>
                {children}
            </x.div>
            <PageFooter />
        </>
    );

export default DefaultLayout;
