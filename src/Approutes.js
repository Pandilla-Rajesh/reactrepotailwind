import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './component/layout/Mainlayout'
import { Loder } from './component/Loder/Loder'
import Employeelist from './component/features/employeelist/Employeelist'

// import Home from './component/features/Home/Home'

const Login = React.lazy(() => import('./component/Login/Login'))
const Home = lazy(() => import("./component/features/Home/Home"))
const Aboutus = lazy(() => import("./component/features/Aboutus/Aboutus"))
const Services = lazy(() => import("./component/features/Services/Services"))
const Labs = lazy(() => import("./component/features/Labs/Labs"))
const Contact = lazy(() => import("./component/features/Contact/Contact"))
const Test = lazy(() => import("./component/features/test/Test"))
const Practise = lazy(() => import("./component/features/practise/Practise"))
const Parent = lazy(() => import("./component/features/Parent/Parent"))
const Curency = lazy(() => import("./component/features/Courency/Courency"))
const CategoryPage = lazy(() => import('./component/features/CategoryPage/CategoryPage'))
const NoDataFound = lazy(() => import('./NoDataFound'))

function Approutes() {

    const router = createBrowserRouter([
        { index: true, element: (<Suspense fallback={ <div>...Loading</div> }><Login /></Suspense>) },
        { path: 'login', element: (<Suspense fallback={ <div>...Loading</div> }><Login /></Suspense>) },
        {
            path: "/", element: (<Suspense fallback={ <Loder /> }><Mainlayout /></Suspense>),

            children: [
                { path: "home", element: (<Suspense fallback={ <Loder /> }><Home /></Suspense>) },
                { path: "aboutus", element: (<Suspense fallback={ <Loder /> }> <Aboutus /></Suspense>) },
                { path: "services", element: (<Suspense fallback={ <Loder /> }><Services /></Suspense>) },
                { path: "labs", element: (<Suspense fallback={ <Loder /> }><Labs /></Suspense>) },
                { path: "employeelist", element: (<Suspense fallback={ <Loder /> }><Employeelist /></Suspense>) },
                { path: "contact", element: (<Suspense fallback={ <Loder /> }> <Contact /> </Suspense>) },
                { path: "test", element: (<Suspense fallback={ <Loder /> }><Test /> </Suspense>) },
                { path: "practise", element: (<Suspense fallback={ <Loder /> }><Practise /></Suspense>) },
                { path: "parent", element: (<Suspense fallback={ <Loder /> }><Parent /></Suspense>) },
                { path: "curency", element: (<Suspense fallback={ <Loder /> }><Curency /></Suspense>) },
                { path: '/category/:slug', element: (<Suspense fallback={ <div>...Loading</div> }><CategoryPage /></Suspense>) },
                { path: '*', element: (<Suspense fallback={ <div>...Loading</div> }><NoDataFound /></Suspense>) }
            ]
        }
    ]);
    return <RouterProvider router={ router }></RouterProvider>
}

export default Approutes
