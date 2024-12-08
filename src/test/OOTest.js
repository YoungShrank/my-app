// 面向对象的UI设计
import  { useState } from "react"
class Env {
    constructor(){
        this.assumptions = [new Term("a -> b"), new Term("b -> c")]
        this.conclusions = [new Term("a"), new Term("c")]
    }

}

class Term {
    constructor(text){
        this.text = text
    }
}

function OOTest(){

    return new EnvView(new Env())

}

function EnvView(env){
    return (
        <div>
            <h2>Assumptions</h2>
            <ul>
                {env.assumptions.map(term => <li><TermView term={term}></TermView></li>)}
            </ul>
            <h2>Conclusions</h2>
            <ul>
                {env.conclusions.map(term => <li> <TermView term={term}></TermView></li>)}
            </ul>
        </div>
    )
}

function TermView({term}){
    const[state, setState] = useState(1)
    function handleClick(){
        console.log(term.text)
        term.text += "a"
        // 改变状态触发渲染
        setState(state + 1)
    }
    return (
        <div onClick = {handleClick}>
            {term.text}
        </div>
    )
}

export default OOTest