import { useState } from 'react'
import { FactsEditorProps } from '.';

const safeParse = (textJson: string, showError = false): any | boolean => {
  try {
    return JSON.parse(textJson);
  }
  catch (e) {
    if (showError) {
      console.error(e);
    }
    return false;
  }
}

export const FactsEditor = ({ object, onChange = () => null }: FactsEditorProps) => {
  const [activeObject, setActiveObject] = useState(JSON.stringify(object, null, 2));
  const parsedValue = safeParse(activeObject);

  return (
    <div>
      <textarea
        title='enter your facts here'
        onChange={ev => {
          setActiveObject(ev.target.value);
          onChange(ev.target.value, parsedValue !== false)
        }}
        style={{ width: '300px', height: '300px' }}
        value={activeObject}>
      </textarea>
      <div className='facts-status' style={{ color: parsedValue ? 'green' : 'darkred' }}>
        Facts are {parsedValue ? 'valid' : 'invalid'}
      </div>
    </div>
  )


}