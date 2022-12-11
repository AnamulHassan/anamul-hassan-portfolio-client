import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import router from './routes/Routes';
import { useEffect, useState } from 'react';
import LoaderPrimary from './components/LoaderPrimary/LoaderPrimary';

function App() {
  const [siteLoading, setSiteLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setSiteLoading(false), 1000);
  }, []);
  if (siteLoading) {
    return (
      <div className="w-screen h-screen bg-[#0a1930] flex items-center justify-center">
        <LoaderPrimary></LoaderPrimary>
      </div>
    );
  }
  return (
    <section className="w-screen overflow-x-hidden mx-auto bg-[#0a1930] text-[#8891b0]">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '3px solid #64feda',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ccd7f7',
            backgroundColor: '#0a1930',
          },
        }}
      />
    </section>
  );
}

export default App;

/*
main-bg- #0a1930


text-main-#ccd7f7
text-gray-#8891b0

text-high-light-#64feda


*/
