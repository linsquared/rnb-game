
const Button = ({ value, btnfunc }) => {
    return (
        <button className="button" onClick={btnfunc} >{value}</button>
    )
}

export default Button