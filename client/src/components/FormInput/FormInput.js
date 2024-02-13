

const FormInput = ({ name, type, value, placeholder, onchange }) => {

    return (
        <input
            className="add__input"
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onchange}
        />
    )

}

export default FormInput