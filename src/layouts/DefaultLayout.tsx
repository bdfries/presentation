import PageFooter from '../components/PageFooter';

type DefaultLayoutProps = {
    children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element =>
    (
        <>
            {children}
            <PageFooter />
        </>
    );

export default DefaultLayout;
