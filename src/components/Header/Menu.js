import PropTypes from 'prop-types';

import menu from '../../data/dummy/menu';
import MenuItem from './MenuItem';

export default function Menu({ onScrollToView }) {
    return (
        <div className="ml-16">
            <ul className="flex">
                {menu.map((item) => (
                    <MenuItem
                        key={item.id}
                        title={item.title}
                        slug={item.slug}
                        reference={item.reference}
                        onScrollToView={onScrollToView}
                    />
                ))}
            </ul>
        </div>
    );
}

Menu.propTypes = {
    onScrollToView: PropTypes.func.isRequired,
};
