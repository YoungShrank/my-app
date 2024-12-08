// 测试js代码
import { useState } from 'react';
function DomToInnerTest() {
    const [jscode, setJscode] = useState('1');
    const [output, setOutput] = useState('');
    function handleSelect(e){
        let textarea = e.target;
        // 获取选区的起始和结束位置
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        // 获取选区的文本
        const selectedText = textarea.value.substring(start, end);
        console.log(selectedText);
        //setOutput(`${start} : ${end} \n ${selectedText}`);
        setOutput(selectedText);
    }

    return (
        <div>
            <p>your code:</p>
            <textarea 
                onChange={
                    (e) => {setJscode(e.target.value); }
                }
                onSelect={handleSelect}
                defaultValue={jscode}>
            </textarea>
            <p>selected code</p>
            <textarea defaultValue={output}>
            </textarea>
        </div>
    )
}

export default DomToInnerTest;

