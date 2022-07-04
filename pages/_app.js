import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer
                closeOnClick={false}
            />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
    Component: null,
    pageProps: {},
};

export default MyApp;
