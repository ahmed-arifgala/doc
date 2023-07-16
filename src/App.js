import DoctorList from "./containers/DoctorList/DoctorList";
import Layout from "./hoc/Layout/Layout";
import Doctor from "./components/Doctor/Doctor";
import Home from "./components/Home/Home";
import ErrorPage from "./UI/ErrorPage/ErrorPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import { HospitalData } from "./StateData/NavData/NavData";
import Hospital from "./components/Hospital/Hospital";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      
     {index: true , element: <Home />} ,
     {path: 'Doctor/:leftItem/:rightItem/:cityName', element: <Doctor />},
     {path: 'Hospital/:leftItem/:rightItem', element: <Hospital />}
    
    ]

  }

]);



function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;


// return (
//   <div>
//     {/* <DoctorList /> */}
//     <Layout />
//     {/* <Doctor /> */}
//   </div>
// );
// }