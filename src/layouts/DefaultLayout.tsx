import PageNavigation from '../components/PageNavigation';
import PageFooter from '../components/PageFooter';

type DefaultLayoutProps = {
    children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element =>
    (
        <>
            <PageNavigation />
            {children}
            <PageFooter />
        </>
    );

export default DefaultLayout;
