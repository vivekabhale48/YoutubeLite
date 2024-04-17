import React, { useContext, useState } from 'react'
import { Context } from '../context/contextApi';

const LangToggle = () => {
    const {t, i18n} = useContext(Context);
    const [checked, setChecked] = useState(false);
    const handleLanguageToggle = () => {
        console.log(checked);
        setChecked((prev)=> !prev);
        checked ? i18n.changeLanguage('en') : i18n.changeLanguage('es');
    }
    return (
        <div className='flex justify-center items-center gap-x-2 max-sm:gap-x-1'>
            {
                checked ? (<span className='text-white max-sm:text-[14px]'>En</span>) : (<span className='text-white max-sm:text-[14px]'>Es</span>)
            }
            <label className="switch inline-block flex items-center justify-center max-sm:h-auto max-sm:w-auto">
                <input checked={checked} type="checkbox" className='hidden' onChange={() => handleLanguageToggle()} />
                <span className="slider relative cursor-pointer w-[40px] h-[20px] bg-[#a4a3a3] rounded-[10px] after:content-[''] after:absolute after:h-[16px] after:w-[15px] after:bg-white after:top-[2px] after:left-[2px] after:rounded-[50%] transition-all duration-300 after:transition-all after:duration-300 max-sm:w-[30px] max-sm:h-[15px] max-sm:after:w-[13px] max-sm:after:h-[13px] max-sm:after:top-[1px]" />
            </label>
        </div>
    )
}

export default LangToggle