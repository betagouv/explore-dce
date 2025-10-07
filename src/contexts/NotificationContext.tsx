import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import Snackbar                    from '@mui/material/Snackbar';
import IconButton                  from '@mui/material/IconButton';
import CloseIcon                   from '@mui/icons-material/Close';
import { NotificationContextType } from '@src/types/context/NotificationContextType';

const NotificationContext = createContext({} as NotificationContextType);
const { Provider } = NotificationContext;
const NotificationConsumer = NotificationContext.Consumer;
NotificationContext.displayName = 'NotificationContext';

interface NotificationProviderProps extends PropsWithChildren {
  children: ReactElement;
}

const NotificationProvider: FunctionComponent<NotificationProviderProps> = ({ children }) => {
    const [alert, setAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const showAlert = useCallback((title: string, message: string, timeout = 5000) => {
        setAlertTitle(title);
        setAlertMessage(message);
        setAlert(true);
        setTimeout(() => setAlert(false), timeout);
    }, []);

    const dismissAlert = () => {
        setAlert(false);
    };

    const store: NotificationContextType = useMemo(
        () => ({ showAlert }),
        [showAlert]
    );

    return (
        <Provider value={store}>
            <div className="notification" onClick={dismissAlert}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={alert}
                    onClose={dismissAlert}
                    message={
                        <span>
                            <b>{alertTitle}</b>
                            <br />
                            {alertMessage}
                        </span>
                    }
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={dismissAlert}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </div>
            {children}
        </Provider>
    );
};

export {
  NotificationContext,
  NotificationProvider,
  NotificationConsumer,
};

export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('Erreur interne : useNotification doit être utilisé dans un NotificationProvider !');
    }
    return context;
};
