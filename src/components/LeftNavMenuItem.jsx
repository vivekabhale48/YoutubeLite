import React from 'react'

const LeftNavMenuItem = ({ name, icon, action, className }) => {
  return (
    <div
      onClick={action}
      className={'flex items-center px-3 text-[16px] cursor-pointer mb-1 h-[40px] rounded-lg hover:bg-white/[0.15] ' + className}>
      <div className='mr-6 text-xl'>{icon}</div>
      <div>{name}</div>
    </div>
  )
}

export default LeftNavMenuItem