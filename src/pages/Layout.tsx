import { FunctionComponent } from 'react';
import { Footer }                        from '@src/components/layout/Footer';
import { PrivateNavBar }                 from '@src/components/layout/PrivateNavBar';
import { Outlet }                        from 'react-router';
import { Stack } from '@mui/system';

const Layout: FunctionComponent = () => {

    return (
        <>
            <PrivateNavBar />
            <Stack flexGrow={1}>
                <Outlet />
            </Stack>
            <Footer />
        </>
    );
};

export default Layout;
