/**
 * TextAreaForm
 * 
 * @package atoms
 */
import './index.css';
type TextAreaFormType ={
  className: string;
  placeholder: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
/**
 * @param {TextAreaFormType} props 
 * @returns {JSX.Element}
 */
export const TextAreaForm = (props: TextAreaFormType) => {
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