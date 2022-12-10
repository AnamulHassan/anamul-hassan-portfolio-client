import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';

function App() {
  return (
    <section className="w-screen mx-auto overflow-x-hidden bg-[#0a1930] text-[#8891b0]">
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
