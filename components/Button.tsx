import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button  = forwardRef<HTMLButtonElement , ButtonProps>(({
     className,
     children,
     disabled,
     type = "button"
}))
Button.displayName = "Button"

export default Button;