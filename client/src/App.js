import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import User from "./pages/User";
import AuthWrapper from "./pages/AuthWrapper";
import Library from "./pages/Library";
import BookInfo from "./pages/BookInfo";

function App() {
  const { theme } = useSelector((state) => state.theme);

  const { colors } = theme;

  return (
    <>
      <Router>
        <div
          className="container"
          style={{ backgroundColor: colors.background }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/library" element={<Library />} />
            <Route path="/auth" element={<AuthWrapper />} />
            <Route path="/user" element={<User />} />
            <Route path="/book-info/:id" element={<BookInfo />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
