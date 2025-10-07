// App.tsx
import '@src/styles/App.scss';
import { MuiDsfrThemeProvider } from '@codegouvfr/react-dsfr/mui';
import { AppRoutes } from '@src/AppRoutes';
import '@src/components/DSFRChart/DSFRChart';
import '@src/components/DSFRChart/DSFRChart.css';

function App() {
    return (
        <div className="App">
            <MuiDsfrThemeProvider>
                <AppRoutes />
            </MuiDsfrThemeProvider>
        </div>
    );
}

export default App;
