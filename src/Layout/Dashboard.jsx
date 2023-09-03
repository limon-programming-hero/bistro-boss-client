import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const buttonClass = "uppercase text-white";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button mx-5 my-8 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          Open Menu
        </label>
        {/* page content here */}
        <div className="lg:w-full lg:mx-0">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side min-h-full">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 min-h-full items-start bg-[#d39e4f]">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/">
              <span className="font-semibold text-2xl">Bistro Boss</span>
              <p>Restaurant</p>
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/dashboard/home" className={buttonClass}>
              User Home
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/dashboard/reservation" className={buttonClass}>
              Reservation
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/" className={buttonClass}>
              Payment History
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/dashboard/cart" className={buttonClass}>
              My Cart
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/" className={buttonClass}>
              Add Review
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/" className={buttonClass}>
              My Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
