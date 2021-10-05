import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';


//components
import PhotoCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/4/35004/a7ded3742ba4624cdf0b3584daea37ba.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/35004/394bd2001582e0ed823016f21251f576.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/35004/5573ad632871b0e4467c7b47fd819e99.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/35004/e5c5aafd03556b381d23a5b9a0f6a42a.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/35004/7d7db62e53c92d746b7b41487bb374e5.jpg"
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
            {isMenuOpen && (
            <ImageViewer
            src={ photos }
            currentIndex={ CurrentImg }
            disableScroll={ false }
            onClose={ closeViewer }
            />
            )}
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) =>
                    <PhotoCollection image={photo} openViewer={openViewer} /> 
                )}
            </div>
        </>
    );
};

export default Photos;
