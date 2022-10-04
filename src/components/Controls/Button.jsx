import styles from './Button.module.css'

const Button = ( {color, onClick, children, value, className} ) => {

    return (
        <button
            value={value}
            onClick={onClick}
            className={`
                ${color === 'pink' && `${styles.pink}`}
                ${color === 'blue' && `${styles.blue}`}
                ${color === 'purple' && `${styles.purple}`}
                ${styles.buttonFdlhc}
                ${className}
            `}
        >
            {children}
        </button>
    )
}

export default Button;