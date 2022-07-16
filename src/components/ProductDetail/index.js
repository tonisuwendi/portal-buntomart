import PropTypes from 'prop-types';

import Info from './Info';
import Preview from './Preview';

export default function ProductDetail({ data }) {
    const { previewImg, name } = data;

    return (
        <section className="flex justify-between w-1100 mx-auto pt-24">
            <Preview previewImg={previewImg} name={name} />
            <Info data={data} />
        </section>
    );
}

ProductDetail.propTypes = {
    data: PropTypes.shape({
        previewImg: PropTypes.string,
        name: PropTypes.string,
    }),
};

ProductDetail.defaultProps = {
    data: {
        previewImg: '',
        name: '',
    },
};
