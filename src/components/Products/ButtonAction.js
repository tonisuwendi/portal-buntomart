import PropTypes from 'prop-types';
import { IoWallet, IoPlay } from 'react-icons/io5';

import Button from '../UI/Button';

export default function ButtonAction({ data }) {
    return (
        <div className="flex gap-x-3 mt-10">
            <Button
                disabled={!data.isReady}
                title="Live Demo"
                variant="outline-primary"
                icon={<IoPlay />}
            />
            <Button
                disabled={!data.isReady}
                title="Beli Sekarang"
                icon={<IoWallet />}
            />
        </div>
    );
}

ButtonAction.propTypes = {
    data: PropTypes.shape({
        isReady: PropTypes.bool,
    }),
};

ButtonAction.defaultProps = {
    data: {
        isReady: false,
    },
};
