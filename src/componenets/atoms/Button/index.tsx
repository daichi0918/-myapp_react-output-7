/**
 * Button
 * 
 * @package atoms
 */
import './index.css';

type Button = {
  className: string;
  ButtonName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

/**
 * @param {} props
 * @returns {JSX.Element}
 */
export const Button = (props: any) => {
  const {className, ButtonName, onClick} = props;
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {ButtonName}
    </button>
  )
}