import { FunctionComponent, ReactElement } from 'react';
import { NotificationProvider }            from '@src/contexts/NotificationContext';
import { ModalProvider }                   from '@src/contexts/ModalContext';
import { CookiesProvider }                 from 'react-cookie';
import { MatomoProvider } from './MatomoContext';

interface DCEProvidersProps extends React.PropsWithChildren {
    children: ReactElement,
}

const DCEProviders: FunctionComponent<DCEProvidersProps> = ({ children }) =>
    <ModalProvider>
        <NotificationProvider>
            <CookiesProvider>
                <MatomoProvider>
                    { children }
                </MatomoProvider>
            </CookiesProvider>
        </NotificationProvider>
    </ModalProvider>;

export default DCEProviders;

