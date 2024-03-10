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
        <div className='flex justify-center items-center gap-x-2'>
            {
                checked ? (<span className='text-white'>En</span>) : (<span className='text-white'>Es</span>)
            }
            <label className="switch mr-5 relative inline-block w-[40px] h-[20px]">
                <input checked={checked} type="checkbox" className='hidden' onChange={() => handleLanguageToggle()} />
                <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#a4a3a3] rounded-[10px] after:content-[''] after:absolute after:h-[16px] after:w-[15px] after:bg-white after:top-[2px] after:left-[2px] after:rounded-[50%] transition-all duration-300 after:transition-all after:duration-300" />
            </label>
        </div>
    )
}

export default LangToggle