import PropTypes from 'prop-types';

import TechnologyList from '../UI/TechnologyList';
import CardInfo from './CardInfo';

export default function Description({ description, features, technologies }) {
    return (
        <CardInfo alignItems="align-start">
            <h3 className="text-xl text-slate-600 font-bold">Deskripsi Produk</h3>
            <p className="text-lg text-slate-500 mt-3">{description}</p>
            <p className="text-lg text-slate-500 mt-3">{features}</p>
            <div className="flex mt-2">
                <p className="text-lg text-slate-700 mt-3 mr-3">Teknologi</p>
                <TechnologyList technologies={technologies} mt="3" align="left" />
            </div>
        </CardInfo>
    );
}

Description.propTypes = {
    description: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
