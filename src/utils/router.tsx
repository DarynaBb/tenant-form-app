import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Form from "../pages/Form";

const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/form', element: <Form />},
      ],
    },
  ]);
  
  export default router;
  