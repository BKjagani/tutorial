import Form from "./components/Form";
import Table from "./components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
