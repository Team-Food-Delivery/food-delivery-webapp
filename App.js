import { AuthProvider } from './src/contexts/AuthContext';
import MainRouter from './src/routes/MainRouter';

function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

export default App;