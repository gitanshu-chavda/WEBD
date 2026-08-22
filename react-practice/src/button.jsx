// Capitalize the component name and use 'text' instead of 'name'
function Button({ text, onClick }) {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;