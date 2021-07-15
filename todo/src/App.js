import React, {useState} from 'react';

import './App.css';

const App = () => {
const [value, setValue] = useState('');

const onChange = (event) => {

    setValue(event.target.value);
}

const onKeyDown = (event) => {
if (event.which == 13) {
    console.log(value);
}
}

return(
    <section id="app" className="container">
        <header>
        <h1 className="title">todo</h1>
        </header>
    <section className="main">
    <input
    className="new-todo" 
    placeholder="o que precisa ser feito?"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    />
    </section>
    
    </section>
);
}



export default App;
