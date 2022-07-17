import PropTypes from 'prop-types';

import Info from './Info';
import Preview from './Preview';

export default function ProductDetail({ data }) {
    const {
        previewImg, name, description, features, technologies,
    } = data;

    return (
        <section className="flex justify-between w-1100 mx-auto pt-24">
            <Preview
                previewImg={previewImg}
                name={name}
                description={description}
                features={features}
                technologies={technologies}
            />
            <Info data={data} />
        </section>
    );
}

ProductDetail.propTypes = {
    data: PropTypes.shape({
        previewImg: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        features: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

ProductDetail.defaultProps = {
    data: {
        previewImg: '',
        name: '',
        description: '',
        features: '',
        technologies: [],
    },
};
