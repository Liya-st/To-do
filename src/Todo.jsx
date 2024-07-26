import React, {useState} from 'react'

export default function Todo({task, onDelete, onDone}) {
    const [check, setCheck] = useState(false)

    function handleCheckboxClick() {
        setCheck(!check)
        if (!check) {
          onDone(task)
        }
      }
  return (
     <div className='flex justify-between w-[375px] h-12 rounded-lg p-2 text-[#9E78CF] bg-[#15101C]'>
    <div className=' font-mono'>
     {task}
        </div>
        <div className='flex gap-1 items-center justify-center'>
        <div className="form-control">
  <label className="cursor-pointer label">
    <input type="checkbox"  className="checkbox checkbox-success" checked={check} onClick={handleCheckboxClick} />
  </label>
      </div>
      <button className="btn btn-square btn-outline btn-error px-2 "
      onClick = {onDelete}>
        Delete
      </button>

        </div>
        </div>
  )
}
