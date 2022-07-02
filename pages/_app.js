import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <ToastContainer
        closeOnClick={false}
      />
    </Fragment>
  );
}

export default MyApp
