import React, {useState} from 'react';

//components
import MenuCollection from '../../Components/restaurant/MenuCollection';

const Menu = () => {
    const [menus, SetMenus] = useState([]);
    return (
        <>
            {/* <div className="flex flex-wrap gap-3">
                {menus.map((menu) => (
                    <MenuCollection {...menu} />
                ))}
                </div> */}
            <h2 className="font-semibold text-lg md:text-2xl my-4">
                Subway Menu
            </h2>
            <div className="flex flex-wrap gap-3 my-4">
                            <MenuCollection 
                                menuTitle="menu"
                                pages="3"
                                image={["https://b.zmtcdn.com/data/menus/427/49427/dbd02f1683f5e35424da60933b863d2f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                                "https://b.zmtcdn.com/data/menus/004/35004/7cc49194ce85b51396b77eeecb53f738.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"]}
                            />
            </div>
        </>
    );
};

export default Menu;
