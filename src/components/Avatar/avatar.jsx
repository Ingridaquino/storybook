'use client'

const Avatar = ({ selectedImage, size }) => {
    let sizeAvatar;



    switch (size) {
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
        <div class="flex -space-x-1 m-2">
            <img src={selectedImage} class={` shadow-lg  rounded-full ring-1  ring-white ${sizeAvatar}`} />
        </div>
    );
};

export default Avatar;