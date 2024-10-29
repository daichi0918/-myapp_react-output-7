/**
 * TextAreaForm
 * 
 * @package atoms
 */
import { read } from 'fs';
import './index.css';
type TextAreaFormType ={
  className: string;
  placeholder?: string;
  inputValue: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}
/**
 * @param {TextAreaFormType} props 
 * @returns {JSX.Element}
 */
export const TextAreaForm = (props: TextAreaFormType) => {
  const {className, placeholder, inputValue, onChange, readOnly = false} = props;
  return (
    <textarea 
      className={className}
      placeholder={placeholder} 
      value={inputValue} 
      onChange={onChange}
      readOnly={readOnly}
    />
  )
}