import React, {useState} from 'react';
import ImgsViewer from "react-images-viewer";

const MenuCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    const prevImage = () => setCurrentImg((prev) => (prev -= 1));
    const nextImage = () => setCurrentImg((prev) => (prev += 1));
    return (
        <>
        <ImgsViewer
        imgs={props.image}
        currImg={ CurrentImg }
        isOpen={isMenuOpen}
        onClose={closeViewer}
        onClickPrev={prevImage}
        onClickNext={NextImage}
        />
        <div className="w-32 h-32 flex flex-col md:w-48 md:h-48 "
            onClick={openViewer}
        >
            <div className="w-full h-full overflow-hidden rounded-lg">
               <img src={props.image[0]}
                    alt="menu"
                    className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"
                />

            </div> 
            <div>
                <strong>{props.menuTitle}</strong>
                <p>{props.pages}</p>
            </div>
        </div>
        </>
    );
};

export default MenuCollection;
