import React, { useContext } from 'react'
import LeftNavMenuItem from './LeftNavMenuItem';
import { categories } from '../utils/constants';
import { Context } from '../context/contextApi'

const LeftNav = () => {
  const { mobileMenu, selectedCategory, setSelectedCategory } = useContext(Context);

  const onClickHandler = (type, name) => {
    switch (type) {
      case "home":
        return (setSelectedCategory(name));

      case "category":
        return (setSelectedCategory(name));

      case "menu":
        return false;

      default:
        break;
    }
  }

  return (
    <div className={`md:block overflow-y-auto absolute md:relative z-10 w-[250px] h-[calc(100vh-60px)] translate-x-[-250px] md:translate-x-0 transition-all ${mobileMenu ? '' : 'translate-x-0'}`}>
      <div className='p-3'>
        {
          categories.map((data, index) => (
            <React.Fragment key={index}>
              <LeftNavMenuItem
                name={data.type === 'home' ? 'Home' : data.name}
                icon={data.icon}
                action={() => {
                  onClickHandler(data.type, data.name);
                }}
                className={`${selectedCategory === data.name ? "bg-white/[0.15]" : ""}`}
              />
              {data.divider && (
                <hr className='my-5 border-white/[0.2]' />
              )}
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default LeftNav