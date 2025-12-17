import { useEffect, useState } from "react";
import API from "../../services/api";

export default function StudentDashboard() {
  const [notes, setNotes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?.paid) {
      API.get("/notes/9-10").then((res) => setNotes(res.data));
    }
  }, []);

  if (!user?.paid) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl text-red-600">
          Please complete payment to access notes
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-maroon mb-4">
        Study Materials
      </h2>

      {notes.map((n) => (
        <div key={n._id} className="border p-3 mb-2">
          <p><b>{n.subject}</b></p>
          <a
            href={`http://localhost:5000/uploads/${n.pdf}`}
            target="_blank"
            className="text-blue-600"
          >
            View PDF
          </a>
        </div>
      ))}
    </div>
  );
}
