const Button = ({ handler, children, styles = [] }) => {
    const classes = styles.join(" ");
    return (
        <button className={classes} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;
