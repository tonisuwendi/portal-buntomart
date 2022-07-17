import PropTypes from 'prop-types';

import Tooltip from './Tooltip';

export default function TechnologyList({
    technologies, height, gap, align, mt,
}) {
    return (
        <div
            className={`flex ${align === 'center' ? 'justify-center' : ''} ${gap} mt-${mt}`}
        >
            {technologies.map((tech) => (
                <Tooltip text={tech.title} key={tech.id}>
                    <img
                        src={tech.icon}
                        alt={`logo ${tech.title}`}
                        style={{ height }}
                        className="cursor-pointer"
                    />
                </Tooltip>
            ))}
        </div>
    );
}

TechnologyList.propTypes = {
    technologies: PropTypes.arrayOf(PropTypes.shape({})),
    height: PropTypes.number,
    gap: PropTypes.string,
    align: PropTypes.string,
    mt: PropTypes.string,
};

TechnologyList.defaultProps = {
    technologies: [],
    height: 25,
    gap: 'gap-x-5',
    align: 'center',
    mt: '7',
};
