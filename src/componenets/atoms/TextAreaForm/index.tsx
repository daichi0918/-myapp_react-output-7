/**
 * TextAreaForm
 * 
 * @package atoms
 */

type TextAreaFormType ={
  className: string;
  placeholder: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
/**
 * @param {TextAreaFormType} props 
 * @returns {JSX.Element}
 */
export const TextAreaForm = (props: any) => {
  const {className, placeholder, inputValue, onChange} = props;
  return (
    <textarea 
      className={className}
      placeholder={placeholder} 
      value={inputValue} 
      onChange={onChange}
    />
  )
}