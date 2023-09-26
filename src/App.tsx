import { useState } from 'react';

import adventure from './assets/images/adventure.png'
import imagination from './assets/images/imagination.png'
import sucess from './assets/images/success.png'

import { PiCheckBold } from 'react-icons/pi'
import { PiXBold } from 'react-icons/pi'
import { PiCaretRightBold } from 'react-icons/pi'

export default function App() {
  function enable(){
    const correct = document.getElementById('correct') as HTMLInputElement;
    const button = document.getElementById('enable') as HTMLButtonElement;

    if (correct && button) {
      if (correct.checked) {
        button.className = 'enable enable-button';
      } else {
        button.className = 'disable cursor-default disable-button';
      }
    }
  }
  
  const [isChecked, setIsChecked] = useState([false, false, false])

  const handleToggle = (index) => {
    const updatedArray = [...isChecked]
    updatedArray[index] = !updatedArray[index]
    setIsChecked(updatedArray)
  }
  
  return (
    <div className="flex flex-col w-screen h-screen place-items-center justify-center bg-gradient-to-br from-[#996DFF] to-[#633BBC] sm:p-10">
      <div className="flex flex-col w-full ms:justify-normal justify-between sm:h-auto h-full bg-[--gray-6] sm:p-10 p-3 space-y-8 sm:rounded-lg">
        <header className="flex justify-between">
          <p className='my-auto sm:text-xl lg:text-2xl'><span className="font-extrabold">👋 Quiz</span>Time</p>
          <span className='flex bg-[--gray-4] sm:px-3 lg:px-5 px-2 sm:py-1 lg:py-2 py-0.5 text-[--green-light] sm:text-base lg:text-xl font-bold border border-[--green-light] rounded-lg'><PiCheckBold className="m-auto mr-2" />3</span>
        </header>

        <h1 className="sm:text-base lg:text-2xl text-center text-[--gray-1] font-bold">Qual era o objetivo da personagem?</h1>
        
        <main className="flex sm:gap-5 gap-2 lg:gap-10 justify-around">
          <label htmlFor='incorrect1' className={isChecked[0] ? 'border-[--red-light]' : 'group card'}>

            <input
              id='incorrect1'
              className='peer/incorrect1'
              type="checkbox"
              checked={isChecked[0]}
              onChange={() => handleToggle(0)}
            />

            <span className={`absolute bg-[--red-light] text-[--red-dark] top-0 right-0 mr-2 sm:mr-5 p-1 peer-checked/incorrect1:rounded-full self-end ${isChecked[0] ? '' : 'circle p-2 bg-transparent'}`}>
              <PiXBold className={isChecked[0] ? '' : 'hidden'} />
            </span>

            <img src={ sucess } alt="" />
            <p>Caçar tesouros</p>
          </label>

          <label onClick={enable} htmlFor='correct' className={isChecked[1] ? 'border-[--green-light]' : 'group card'}>
            <input
              id='correct'
              className='peer/correct'
              type="checkbox"
              checked={isChecked[1]}
              onChange={() => handleToggle(1)}
            />

            <span className={`absolute bg-[--green-light] text-[--green-dark] top-0 right-0 mr-2 sm:mr-5 p-1 peer-checked/correct:rounded-full self-end ${isChecked[1] ? '' : 'circle p-2 bg-transparent'}`}>
              <PiCheckBold className={isChecked[1] ? '' : 'hidden'} />
            </span>

            <img src={ imagination } alt="" />
            <p>Ter mais tempo para ler livros</p>
          </label>

          <label htmlFor='incorrect2' className={isChecked[2] ? 'border-[--red-light]' : 'group card'} >
           <input
              id='incorrect2'
              className='peer/incorrect2'
              type="checkbox"
              checked={isChecked[2]}
              onChange={() => handleToggle(2)}
            />

            <span className={`absolute bg-[--red-light] text-[--red-dark] top-0 right-0 mr-2 sm:mr-5 p-1 peer-checked/incorrect2:rounded-full self-end ${isChecked[2] ? '' : 'circle p-2 bg-transparent'}`}>
              <PiXBold className={isChecked[2] ? '' : 'hidden'} />
            </span>

            <img src={ adventure } alt="" />
            <p>Navegar pelos 7 mares</p>
          </label>
        </main>
        
        <footer className="flex justify-between left-0 bottom-0 w-full sm:p-0 p-5">
          <p className='mt-auto font-bold text-xs'><span className='text-base lg:text-xl mr-1'>4</span>/ 5</p>
          <button id='enable' className='disable cursor-default disable-button'><PiCaretRightBold /></button>
        </footer>
      </div>
    </div>
  )
}