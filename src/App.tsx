import { BrowserRouter } from 'react-router-dom'
import 'style/styles.css'
import AuthProvider from 'providers/authProvider';
import { AppRoutes } from 'routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
