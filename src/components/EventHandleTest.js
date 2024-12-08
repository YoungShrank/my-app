import { useState } from 'react';
/** test handle of an event
*/
function MyActiveButton() {
    // attribute setters
    const [text, setText] = useState('');
    return (
        <div>
            <button onClick={// handler function
                () => {
                    setText('Button clicked');
                } // data used in template
            }>Click me  {text}</button>;
        </div>
    )
}



export default MyActiveButton;