export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold text-maroon text-center mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-maroon text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}