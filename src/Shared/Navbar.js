import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        {/* <!-- Navbar --> */}

        <div className="w-full navbar bg-info">
          <div className="flex-1 px-2 mx-2 text-3xl text-red-600">
            <Link to="/">Task Manager</Link>
          </div>
          <div className="flex-none lg:hidden">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">

              {/* <!-- Navbar menu content here --> */}

              <li>
                <Link to="/" >
                  Completed Tasks
                </Link>
              </li>
              <li>
                <Link to="/to-do" >
                  To-Do
                </Link>
              </li>
              <li>
                <Link to="/calender">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/" >
              Completed Tasks
            </Link>
          </li>
          <li>
            <Link to="/to-do" >
              To-Do
            </Link>
          </li>
          <li>
            <Link to="/calender">
              Calendar
            </Link>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;