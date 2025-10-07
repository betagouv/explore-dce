import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export type ModalContextType = {
  showModal: (title: string, subtitle: string, actions?: ReactNode, onClose?: () => void) => void;
  hideModal: () => void;
};

const ModalContext = createContext({} as ModalContextType);
const { Provider } = ModalContext;
const ModalConsumer = ModalContext.Consumer;
ModalContext.displayName = 'ModalContext';

interface ModalProviderProps extends PropsWithChildren {
    children: ReactElement;
}

const ModalProvider: FunctionComponent<ModalProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalSubtitle, setModalSubtitle] = useState('');
    const [modalActions, setModalActions] = useState<ReactNode>(null);
    const [customOnClose, setCustomOnClose] = useState<(() => void) | undefined>(undefined);

    const showModal = (title: string, subtitle: string, actions?: ReactNode, onClose?: () => void) => {
        setModalTitle(title);
        setModalSubtitle(subtitle);
        setModalActions(actions || null);
        setCustomOnClose(() => onClose);
        setOpen(true);
    };

    const hideModal = useCallback(
        () => {
            setOpen(false);
            setCustomOnClose(undefined);
        },
        []
    );

    const handleClose = useCallback(
        () => {
            if (customOnClose) {
                customOnClose();
            }
            hideModal();
        },
        [customOnClose, hideModal]
    );

    const store: ModalContextType = useMemo(
        () => ({ showModal, hideModal }),
        [showModal, hideModal]
    );

    return (
        <Provider value={store}>
            {children}
            <Dialog open={open} onClose={handleClose}>
                {modalTitle && <DialogTitle>{modalTitle}</DialogTitle>}
                <DialogContent>
                {modalSubtitle && <Typography>{modalSubtitle}</Typography>}
                </DialogContent>
                <DialogActions>
                {modalActions ? modalActions : <Button onClick={handleClose}>OK</Button>}
                </DialogActions>
            </Dialog>
        </Provider>
    );
};

export {
    ModalContext,
    ModalProvider,
    ModalConsumer,
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
