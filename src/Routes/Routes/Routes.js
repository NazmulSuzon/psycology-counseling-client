import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Appointment from "../../Pages/Appointments/Appointment/Appointment";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import ServiceLayout from "../../Services/ServiceLayout/ServiceLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/appointment',
        element: <Appointment/>
    },
    {
        path: '/services',
        element: <ServiceLayout/>
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        errorElement: <DisplayError/>,
        children:[
            {
                path:'/dashboard',
                element: <MyAppointment/>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element: <AdminRoute><AddDoctors/></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors/></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element: <AdminRoute><Payment/></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])

export default router;