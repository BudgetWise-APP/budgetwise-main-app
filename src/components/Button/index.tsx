import { BUTTON_TYPES, BUTTON_VARIANTS, buttonVariants } from './constants';
import { cn } from '@/utils';
import { ButtonProps } from './types';


const Button = ({children, className = '', type = BUTTON_TYPES.button, variant = BUTTON_VARIANTS.blue, ...rest}: ButtonProps) => {

    const combinedClassNames = buttonVariants({
        variant,
        class: className,
      })
    
    return (
        <button  className={cn(combinedClassNames)} type={type} {...rest}>
            {children}
        </button>
    );
};

export default Button;