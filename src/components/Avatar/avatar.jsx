const Avatar = ({image, onClick, size }) => {
    let sizeAvatar;

    switch(size) {
        case 'small':
            sizeAvatar = 'inline-block h-10 w-10';
            break;
        case 'medium': 
            sizeAvatar = 'inline-block h-13 w-13';
            break;
        case 'large': 
            sizeAvatar = 'inline-block h-15 w-15 ';
            break;
    }

    return (
        <div class="flex -space-x-2 m-8">
            <button  onClick={onClick}>
                 <img src={image} class={` rounded-full ring-2  ring-white ${sizeAvatar}`} />
            </button>
        </div>
    );
};

export default Avatar;