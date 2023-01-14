import React from 'react';
import Text from '../elements/Text';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="text-white">
        <ul>
            <Text className="text-lg pl-4 mt-6 font-bold mb-12">
                Focus <span className="text-tertiary">App</span>
            </Text>

          
                <NavLink 
                    to="/home"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
                    <li className="p-4 ">
                        Home
                    </li>
                </NavLink>
            
                <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 pl-4"
                    }     
                >
                    <li className="p-4">
                        Notes
                    </li>                    
                </NavLink>
           

                <NavLink 
                    to="/stopwatch"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 pl-4"
                    }     
                >
                    <li className="p-4">
                        Stopwatch
                    </li>
                    
                </NavLink>
           
            
                <NavLink 
                    to="/timer"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 py-3 text-sm pl-4"
                    }     
                >
                    <li className="p-4">
                        Timer
                    </li>                    
                </NavLink>
         
        </ul>
    </aside>
  )
}

export default Sidebar