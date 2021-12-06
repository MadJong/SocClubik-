import React from "react"
import classes from "./FormsControls.module.css"
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "" )}>
            <div><textarea  {...input} {...props}/></div>
           {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const TextareaMS = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl +  " " + classes.area + " " + (hasError ? classes.error : "" ) }>
            <div ><textarea  {...input} {...props}/></div>
           {hasError && <span className={classes.errorSpan}>{meta.error}</span> }
        </div>
    )
}

export const InputForm = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "" )}>
            <div><input  {...input} {...props}/></div>
           {hasError && <span>{meta.error}</span> }
        </div>
    )
}
