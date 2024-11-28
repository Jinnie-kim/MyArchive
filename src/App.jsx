import { AuthProvider } from './store/AuthProvider';
import Router from './route/Router';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
