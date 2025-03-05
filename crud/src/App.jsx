import Form from "./components/Form";
import News from "./components/News";
import Table from "./components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  // const navigate = useNavigate()
  return (
    <div>
     
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/form" element={<Form />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
