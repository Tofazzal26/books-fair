import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "./../Pages/Home/Home";
import ListedBook from "./../Pages/ListedBook/ListedBook";
import PageRead from "./../Pages/PageRead/PageRead";
import ChildBook from "./../Pages/ChildBook/ChildBook";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
      },
      {
        path: "/listedBook",
        element: <ListedBook />,
      },
      {
        path: "/pageRead",
        element: <PageRead />,
      },
      {
        path: "/children",
        element: <ChildBook />,
      },
    ],
  },
]);

export default Router;
