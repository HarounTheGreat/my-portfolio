import AppRoutes from "./AppRoutes";
import { MyProvider } from "./MyContext";

function App() {
  return (
    <MyProvider>
      <AppRoutes />
    </MyProvider>
  );
}

export default App;
