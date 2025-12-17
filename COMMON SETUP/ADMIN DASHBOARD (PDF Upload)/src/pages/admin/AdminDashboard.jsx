import { useState } from "react";
import API from "../../services/api";

export default function AdminDashboard() {
  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");
  const [pdf, setPdf] = useState(null);

  const uploadNotes = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("standard", standard);
    formData.append("subject", subject);
    formData.append("pdf", pdf);

    await API.post("/notes/upload", formData);
    alert("PDF Uploaded Successfully");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-maroon mb-4">
        Admin Dashboard
      </h2>

      <form onSubmit={uploadNotes} className="bg-white p-4 shadow w-96">
        <select
          className="border p-2 w-full mb-2"
          onChange={(e) => setStandard(e.target.value)}
        >
          <option>Select Standard</option>
          <option>9-10</option>
          <option>11-12</option>
        </select>

        <input
          type="text"
          placeholder="Subject"
          className="border p-2 w-full mb-2"
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="file"
          accept="application/pdf"
          className="mb-2"
          onChange={(e) => setPdf(e.target.files[0])}
        />

        <button className="bg-maroon text-white w-full py-2">
          Upload PDF
        </button>
      </form>
    </div>
  );
}
