import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from "./screens/Home";
import About from "./screens/About";

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Admin />, document.getElementById("gfsurvey-admin"));
});

const Admin = () => {
  return (
    <HashRouter>
      <div class="flex min-h-screen">
        <div class="w-1/4 sm:w-1/5 bg-gray-800 text-white">
          <div class="p-1 sm:p-4">
            <h2 class="text-2xl font-semibold mb-6 text-white">My Plugin</h2>
            <ul>
              <li>
                <Link
                  to="/"
                  class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white focus:text-white"
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white focus:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white focus:text-white"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-3/4 sm:w-4/5 bg-white p-8">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};
