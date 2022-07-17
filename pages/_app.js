import { useState, useEffect } from 'react'
import splitbee from '@splitbee/web'
import { Toaster } from 'react-hot-toast'

import PopupProvider from '../components/Popup'
import '../styles/globals.css'

splitbee.init()

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return <>
      <Toaster 
        toastOptions={{
          success: {
            style: {
              background: 'linear-gradient(90deg, #9CF29D 0%, #6DCAC9 100%)'
            },
          },
          error: {
            style: {
              background: '#FFE5F4',
              color: '#CC0078'
            },
            iconTheme: {
              primary: '#CC0078'
            }
          },
        }}
      />
      <PopupProvider />
      <Component {...pageProps} />
    </>
  }
}