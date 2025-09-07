import React, { FC } from 'react'

type TProps = {
  width: string,
  color: string,
}

const Progress: FC<TProps> = ({ width, color = "#7dd32c" }) => {
  return (
    <>
      <div className="w-[100px] bg-gray-200 rounded-full h-2">
        <div className={`bg-[${color}] h-2 rounded-full`} style={{ width: `${width ? width : "50%"}` }}></div>
      </div>
    </>
  )
}

export default Progress
