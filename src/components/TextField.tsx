type TextFieldProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'name';
    placeholder?: string;
    error?: string;
    onSubmit?: () => void;
}

export const TextField = (props: TextFieldProps) => {
    return (
        <div className="form-group">
            {/* <label htmlFor={props.label}>{props.label}</label> */}
            <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
                value={props.value}
                onChange={ (e) => props.onChange(e.target.value) } 
                onKeyDown={ (e) => {
                    if (e.key === 'Enter') {
                        props.onSubmit && props.onSubmit();
                    }
                } }
            />
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    )
}