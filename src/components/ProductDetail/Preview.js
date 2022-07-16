import PropTypes from 'prop-types';

export default function Preview({ previewImg, name }) {
    return (
        <div className="bg-slate-50 w-[730px] h-[500px] overflow-scroll drop-shadow rounded-lg transition hover:drop-shadow-lg">
            {previewImg && <img src={previewImg} alt={`preview ${name}`} />}
        </div>
    );
}

Preview.propTypes = {
    name: PropTypes.string,
    previewImg: PropTypes.string,
};

Preview.defaultProps = {
    name: '',
    previewImg: '',
};
