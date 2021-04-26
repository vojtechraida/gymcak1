const Button = ({children, color}) => {
    if(!children) return <button>prazdne tlacitko</button>
    
    return <button style={{backround: color}}>{children}</button>
}

export default Button;