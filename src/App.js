import { createBrowserHistory } from "history";
import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

export const history = createBrowserHistory()


function App() {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useEffect(() => {
    history.listen(setState)
    window.scroll({ top: 0, left: 0 });
  }, [history]);

  return (
    <div className='dark:bg-gray-600'>
      <RouterProvider router={routes} />

    </div>
  );
}

export default App;
