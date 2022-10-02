import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Users from './Components/Users/Users';
import Main from './Layout/Main/Main';
import UserInfo from './Layout/UserInfo/UserInfo';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
        {
          path: "/home",
          element: <div>Home</div>,
        },
        {
          path: "/users",
          element: <Users></Users>,
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
        },
        {
          path: "/about",
          element: <div>about</div>,
        },
        {
          path: "/contact",
          element: <div>Contact</div>,
        },
        {
          path: "users/:userId",
          element: <UserInfo></UserInfo>,
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
          },
        }
      ]
    },
    
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
