import PropTypes from 'prop-types';

import Description from './Description';

export default function Preview({
    previewImg, name, description, features, technologies,
}) {
    return (
        <div className="w-[730px]">
            <div className="bg-slate-50 h-[450px] overflow-scroll drop-shadow rounded-lg transition hover:drop-shadow-lg mb-8">
                {previewImg && <img src={previewImg} alt={`preview ${name}`} />}
            </div>
            <Description
                description={description}
                features={features}
                technologies={technologies}
            />
        </div>
    );
}

Preview.propTypes = {
    previewImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
