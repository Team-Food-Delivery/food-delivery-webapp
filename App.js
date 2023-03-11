import { AuthProvider } from './src/contexts/AuthContext';
import MainRouter from './src/components/routes/MainRouter';

function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

export default App;