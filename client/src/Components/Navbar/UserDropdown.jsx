import { Menu} from '@headlessui/react';
import { FaUserAlt} from "react-icons/fa";

function UserDropdown() {
    return (
        <Menu>
        <Menu.Button>
            <span className="border border-gray-300 p-2 text-zomato-400 rounded-full ">
                <FaUserAlt/>
            </span>
        </Menu.Button>

        <Menu.Items>
            <Menu.Item>
                <button> Sign In </button>
            </Menu.Item>
            <Menu.Item>
                <button> Sign Up </button>
            </Menu.Item>
        </Menu.Items>
        </Menu>

  );
};

export default UserDropdown;
