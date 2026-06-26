import "./Button.css";

function Button({
    children,
    variant = "primary",
    icon = null,
    onClick,
    type = "button"
}) {
    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            type={type}
        >
            <span>{children}</span>

            {icon && (
                <span className="btn-icon">
                    {icon}
                </span>
            )}
        </button>
    );
}

export default Button;