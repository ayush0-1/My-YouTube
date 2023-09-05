import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from "./components/Haed"
import store from './utils/store';
import {RouterProvider, createBrowserRouter, } from "react-router-dom"
import MainCont from './components/MainCont';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainCont/>
        },
        {
          path:"/watch",
          element:<WatchPage/>
        },
        {
          path:"/search",
          element:<SearchPage/>
        },
        {
          path:"/search/watch",
          element:<WatchPage/>
        },
      ]
    }
  ])



  return (
    <>
    <Provider store = {store}>
      <RouterProvider router={appRouter}/>
    </Provider>
    </>
  );
}



export default App;
