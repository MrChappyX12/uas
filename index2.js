import React from 'react';
import ReactDOM from 'react-dom/client';
import LatihanJson2PHP from './LatihanJson2PHP';


const Halaman = ()=>{
return (<>
    <LatihanJson2PHP/>

</>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Halaman/>);