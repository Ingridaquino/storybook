
const Button = ({ children, onClick, size, color }) => {
    let sizeButton;
    let colorButton;

    switch(size) {
        case 'small':
            sizeButton = 'text-xs px-3 py-1 ';
            break;
        case 'medium': 
            sizeButton = 'text-sm px-4 py-2';
            break;
        case 'large': 
            sizeButton = 'text-lg px-8 py-3';
            break;
    }

    switch(color) {
        case 'secondary': 
            colorButton = 'bg-secondary';
            break;
        case 'primary': 
            colorButton = 'bg-primary';
            break;
    }


    return (
      <button
        onClick={onClick}
        className={` ${colorButton} custom-hover text-white font-bold m-8 rounded ${sizeButton}`}
      > 
        {children}
      </button>
    );
  };
  
  export default Button;
  