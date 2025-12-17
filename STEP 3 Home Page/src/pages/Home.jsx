import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <nav className="bg-maroon text-white px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">SHREE OJAS VIDYALAYA</h1>
        <Link to="/login" className="bg-white text-maroon px-4 py-1 rounded">
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-maroon">
          Quality Education for Std 9–12
        </h2>
        <p className="mt-4 text-lg">
          Paid PDF Study Material | Gujarati & English Medium
        </p>
        <Link
          to="/login"
          className="mt-6 inline-block bg-maroon text-white px-6 py-3 rounded"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}