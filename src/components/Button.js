function Button(props) {
    return (
        <button className={props.isPrimary ? 'primary' : 'secondary'}>
            {props.isPrimary ? "Get Started" : "Learn more"}
        </button>
    );
}

export default Button;