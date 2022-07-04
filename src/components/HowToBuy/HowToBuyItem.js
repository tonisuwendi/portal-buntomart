import PropTypes from 'prop-types';

import HTBItemWrapper from './HTBItemWrapper';
import NumberItem from './NumberItem';

export default function HowToBuyItem({ data, step, onChangeStep }) {
    return (
        <HTBItemWrapper step={step} data={data} onChangeStep={onChangeStep}>
            <NumberItem stepId={step.id} data={data} />
            <div className="ml-3">
                <h4 className="text-xl font-bold text-slate-700">{data.title}</h4>
                <p>{data.subtitle}</p>
            </div>
        </HTBItemWrapper>
    );
}

HowToBuyItem.propTypes = {
    onChangeStep: PropTypes.func,
    step: PropTypes.shape({
        id: PropTypes.string,
    }),
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
    }),
};

HowToBuyItem.defaultProps = {
    onChangeStep: () => {},
    step: {
        id: '',
    },
    data: {
        title: '',
        subtitle: '',
    },
};
