import React from 'react';
import ReactDOM from 'react-dom/client';
import PackingList from './exercise0';
import PackingList2 from './exercise1';
import DrinkList from './exercise2';
import RecipeList from './exercise3';
import Addition from './exercise4';
import Present from './exercise5';
import Garage from './exercise6';
import Button from './exercise7';
import './css/output.css'

export const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Addition />
    -------------------------------------------------------------------------
    <PackingList />
    -------------------------------------------------------------------------
    <PackingList2 />
    -------------------------------------------------------------------------
    <DrinkList />
    -------------------------------------------------------------------------
    <RecipeList />
    -------------------------------------------------------------------------
    <Present />
    -------------------------------------------------------------------------
    <Garage />
    -------------------------------------------------------------------------
    <Button text='Click Me' style='soft'/>
    <Button text='Click Me' style='hard'/>
    </>
)