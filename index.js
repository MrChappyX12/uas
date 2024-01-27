import React from 'react';
import ReactDOM from 'react-dom/client';
import LatihanFormPHP from './LatihanFormPHP';
import LatihanJsonPHP from './LatihanJsonPHP';
import LatihanJson2PHP from './LatihanJson2PHP';
import LatihanJson3PHP from './LatihanJson3PHP';
import LatihanBotton1 from './LatihanBotton1';

const Halaman = ()=>{
return (<>
    <LatihanFormPHP/>
    <LatihanJsonPHP/>
    <LatihanJson2PHP/>
    <LatihanJson3PHP/>
    <LatihanBotton1/>
</>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Halaman/>);
