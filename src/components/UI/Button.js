/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { LightSpinner, DarkSpinner } from '../Icons/Spinner';

export default function Button({
    title, type, variant, size, full, className, disabled, onClick, icon, loading, loadingText,
}) {
    let variantClasses;
    let sizeClasses;
    let customClass = '';
    let isDark = true;

    switch (variant) {
    case 'primary':
        isDark = true;
        variantClasses = `buntomart-bg-color-primary text-white${disabled ? '' : ' buntomart-bg-color-primary-hover'}`;
        break;
    case 'secondary':
        isDark = true;
        variantClasses = `buntomart-bg-color-secondary text-white${disabled ? '' : ' buntomart-bg-color-secondary-hover'}`;
        break;
    case 'light':
        isDark = false;
        variantClasses = `bg-white text-black${disabled ? '' : ' hover:bg-slate-300'}`;
        break;
    case 'outline-primary':
        isDark = false;
        variantClasses = `bg-white box-border border buntomart-border-color-primary border-2 buntomart-text-color-primary${disabled ? '' : ' hover:bg-slate-200'}`;
        break;
    case 'outline-slate':
        isDark = false;
        variantClasses = `bg-white box-border border border-slate-300 border-1 text-slate-600${disabled ? '' : ' hover:bg-slate-200'}`;
        break;
    default:
        isDark = true;
    }

    switch (size) {
    case 'md':
        sizeClasses = 'h-10 px-5';
        break;
    case 'md-lg':
        sizeClasses = 'h-12 text-lg';
        break;
    case 'lg':
        sizeClasses = 'px-8 py-3 text-xl';
        break;
    default:
        sizeClasses = '';
    }

    if (full) {
        customClass = `${customClass} w-full justify-center`;
    }

    let buttonRender = (
        <>
            <LightSpinner />
            {loadingText}
        </>
    );

    if (loading && !isDark) {
        buttonRender = (
            <>
                <DarkSpinner />
                {loadingText}
            </>
        );
    }

    if (!loading) {
        buttonRender = (
            <>
                {icon}
                {title}
            </>
        );
    }

    return (
        <button
            disabled={disabled}
            className={`transition disabled:opacity-50 disabled:cursor-not-allowed flex gap-x-2 items-center duration-300 buntomart-rounded ${variantClasses} ${sizeClasses} ${className} ${customClass}`}
            type={type}
            onClick={onClick}
        >
            {buttonRender}
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    full: PropTypes.bool,
    className: PropTypes.string,
    loadingText: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    title: '',
    type: 'button',
    variant: 'primary',
    size: 'md',
    full: false,
    className: '',
    loadingText: 'Loading...',
    disabled: false,
    loading: false,
    icon: null,
    onClick: () => {},
};
