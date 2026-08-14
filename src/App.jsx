import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Ubicaciones from "./pages/Ubicaciones";
import "./styles.css";

// Sensor propio de Emerson Guerrero Olaya dentro del seed del curso
const SENSOR_POR_DEFECTO = "sensor_1250094297";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/sensor/${SENSOR_POR_DEFECTO}`} replace />}
        />
        <Route path="/sensor/:sensorId" element={<Dashboard />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="*" element={<Navigate to="/ubicaciones" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
