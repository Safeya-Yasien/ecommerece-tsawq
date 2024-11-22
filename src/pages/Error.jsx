import { Link } from "react-router-dom";

const Error = ({ errorCode = 404, message = "Page Not Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-custom-blue mb-4">{errorCode}</h1>
      <p className="text-2xl text-gray-700 mb-8">{message}</p>
      <Link
        to="/"
        className="px-6 py-3 bg-custom-blue text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
