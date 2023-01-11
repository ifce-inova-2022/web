import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/Auth/AuthProvider";

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
          />
          <Header />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
