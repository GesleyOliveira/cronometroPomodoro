import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm(){
    return(
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput 
            labelText='task' 
            id='meuInput' 
            type='text' 
            placeholder='Digite aqui sua tarefa'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />}/>
          </div>
        </form>
    )
}