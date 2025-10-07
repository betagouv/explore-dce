import {
    createContext,
    FunctionComponent,
    ReactElement,
    useEffect,
} from 'react';

interface MatomoProviderProps extends React.PropsWithChildren {
    children: ReactElement;
}

const MatomoContext = createContext({});

const { Provider }        = MatomoContext;
const MatomoConsumer      = MatomoContext.Consumer;
MatomoContext.displayName = 'MatomoContext';

const MATOMO_TMC_URL = import.meta.env.VITE_MATOMO_TMC_URL;
const MATOMO_ENABLED = MATOMO_TMC_URL && (MATOMO_TMC_URL !== 'DISABLED');

const MatomoProvider: FunctionComponent<MatomoProviderProps> = ({ children }) => {

    useEffect(() => {
        if (MATOMO_ENABLED) {
            // Code d'initialisation de Matomo
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({
                'mtm.startTime': (new Date().getTime()),
                'event':         'mtm.Start'
            });
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true;
            g.src=MATOMO_TMC_URL;
            s.parentNode?.insertBefore(g,s);
        }
    }, []);

    return <Provider value={{}}>{children}</Provider>;
};

export { MatomoContext, MatomoProvider, MatomoConsumer };
