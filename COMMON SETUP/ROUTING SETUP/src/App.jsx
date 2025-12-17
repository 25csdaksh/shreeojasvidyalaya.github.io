import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
