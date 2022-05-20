import logo from "../../assets/global/planradar_logo.png";
import { useGetTicketsApi } from "../../hooks/api/useGetTicketsApi";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/Error";

export default function Header() {
  const { isLoading, data: tickets, isError, error } = useGetTicketsApi();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error>Error Message is: {error.message}</Error>;
  }

  return (
    <header className="w-full py-4 border-b border-solid border-gray-200">
      <nav>
        <div className="container flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="PlanRadar Logo" className="w-32 sm:w-44" />
          </Link>
          <Link
            to={"/create-ticket"}
            className="py-1 px-3 sm:py-2 sm:px-6 border border-solid border-transparent rounded-md text-white bg-green-700 transition-all hover:text-green-700 hover:bg-transparent hover:border-green-700"
          >
            Create Ticket
          </Link>
        </div>
      </nav>
    </header>
  );
}
