import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const buttonClass = "uppercase text-white";
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button my-8 lg:hidden"
          >
            Open Options
          </label>
          {/* page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-fit px-8 min-h-full items-start bg-[#d39e4f]">
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
    </div>
  );
};

export default Dashboard;
