import { Navbar } from "./components/Navbar";
import { Routes, Route, Outlet,Navigate} from "react-router-dom";

import { Paths } from "./components/Paths";

function App() {
  return (
    <div>
      <div className="w-screen">
        {/* <OTPForm digit={6}/> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            {Paths.map((el) => (
              
              <Route path={el.shortPathName} element={el.component}></Route>
            ))}
            
            

            <Route path="*" element={<Navigate to="page-not-found" />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
