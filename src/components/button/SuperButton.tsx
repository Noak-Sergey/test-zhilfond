import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import './SuperButton.scss';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    loading?: boolean
    onClick?: () => void
    disabled?: boolean
    type?: "danger" | "success" | "warning" | "primary" 
    min?: boolean
    large?: boolean
    block?: boolean
    outlined?: boolean
    text?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        loading, className, onClick, disabled, type, min, large, block, outlined, text,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    
    let finalClassName = loading ? "loading ": "default";
    const onDisabled = disabled ? true : false;

    const setType = () => {
        if(type) {      
            switch(type) {
                case "danger": 
                    return finalClassName += " danger";
                case "success":
                    return finalClassName += " success";
                case "warning":
                    return finalClassName += " warning";
                default: 
                    return finalClassName;
            }
        } else {
            return finalClassName += " primary"
        }
    }
    setType();

    const setOnSize = () => {
        if(min) {
            finalClassName += " min";
        } 

        if(large) {
            finalClassName += " large";
        } 

        if(block) {
            finalClassName += " block";
        } 

        if(outlined) {
            finalClassName += " outlined";
        } 

        if(text) {
            finalClassName += " text";
        } 
        return
    }
    setOnSize();
    
    return (
        <div>
            <button 
                disabled={onDisabled}
                className={finalClassName}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            />
            <p>{React.Children.count(restProps.children)}</p>
        </div>
    )
}

export default SuperButton;