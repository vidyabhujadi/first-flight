import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from "./Card"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <div className='flex justify-center'>
    
    <Card title="Ram Kund" image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/68/fa/97/agastya-rishi-ashram.jpg?w=400&h=-1&s=1"/>
    <Card title="Ganpati Temple" image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ab/40/a7/shri-vishal-ganapati.jpg?w=400&h=-1&s=1"/>
    </div>
    </>

);