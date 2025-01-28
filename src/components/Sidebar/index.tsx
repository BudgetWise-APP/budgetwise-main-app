import {
  HomeIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  CalendarDateRangeIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="z-[500] fixed left-0 top-0 bottom-0 overflow-auto px-7 w-full max-w-[250px] h-lvh border-r border-gray-300 bg-white shadow-default-shadow">
      <nav className="flex w-full align-middle pt-7">
        <ul className="flex flex-col w-full justify-end align-top list-none">
          <li className="w-100 text-base">
            <Link to="/">
              <div className="p-3 mb-4 w-full flex align-middle hover:text-blue-500 transition">
                <HomeIcon width={20} className="mr-2" />
                Dashboard
              </div>
            </Link>
          </li>
          <li className="w-100 text-base">
            <Link to="/coins-tracker">
              <div className="p-3 mb-4 w-full flex align-middle hover:text-blue-500 transition">
                <HomeIcon width={20} className="mr-2" />
                Coins Tracker
              </div>
            </Link>
          </li>
          <li className="w-100 text-base">
            <Link to="/budget-planner">
              <div className="p-3 mb-4 w-full flex align-middle hover:text-blue-500 transition">
                <CalendarDateRangeIcon width={20} className="mr-2" />
                Budget planner
              </div>
            </Link>
          </li>
          <li className="w-100 text-base">
            <Link to="/settings">
              <div className="p-3 mb-4 w-full flex align-middle hover:text-blue-500 transition">
                <Cog6ToothIcon width={20} className="mr-2" />
                Settings
              </div>
            </Link>
          </li>
          <li className="w-100 text-base">
            <Link to="/goals-tracker">
              <div className="p-3 mb-4 w-full flex align-middle hover:text-blue-500 transition">
                <RocketLaunchIcon width={20} className="mr-2" />
                Goals tracker
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
