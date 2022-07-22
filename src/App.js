import "./App.css";
import StepOne from "./components/StepOne";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Final from "./components/Final";
import Error404 from "./components/Error404";
import { useState } from "react";

function App() {
  let [form, setForm] = useState({
    name: "",
    surname: "",
    gender: "",
    city: "",
    email: "",
    password: "",
  });

  return (
    <div className="container">
      <div className="brand-box">
        <h1>Arneca MultiForm</h1>
        <p>My first intern project at Arneca</p>
      </div>
      <div className="magic-form">
        <BrowserRouter>
          <Routes>
            <Route index element={<StepOne form={form} setForm={setForm} />}  />
            <Route path="StepTwo" element={<StepTwo form={form} setForm={setForm}  />}/>
            <Route path="StepThree" element={<StepThree form={form} setForm={setForm}  />} />
            <Route path="Final" element={<Final form={form}/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
