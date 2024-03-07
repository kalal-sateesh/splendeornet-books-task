import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit" element={<EditBook />} />
          <Route path="/details">
            <Route index element={<BookDetails />} />
            <Route path=":pid" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
