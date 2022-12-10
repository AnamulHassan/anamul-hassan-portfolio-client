import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import router from './routes/Routes';

function App() {
  return (
    <section className="w-screen mx-auto overflow-x-hidden bg-[#0a1930] text-[#8891b0]">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '2px solid #64feda',
            padding: '16px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#0a1930',
            backgroundColor: '#ccd7f7',
          },
        }}
      />
    </section>
  );
}

export default App;
