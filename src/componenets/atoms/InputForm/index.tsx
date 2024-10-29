/**
 * InputForm
 * 
 * @package atoms
 */

import './index.css';

type InputFormType = {
  className: string;
  placeholder?: string;
  inputValue: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
}

/**
 * 
 * @param {InputFormType} props 
 * @returns {JSX.Element}
 */
export const InputForm = (props: InputFormType) => {
  const {className, placeholder, inputValue, onChange, readonly = false} = props;
  return (
      <>
        <input 
          type='text'
          className={className}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChange}
          readOnly={readonly}
        />
      </>
  )
}
