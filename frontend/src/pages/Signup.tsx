import React from 'react';
import { Qoute } from '../Components/Qoute';
import { Auth } from '../Components/Auth';

export function Signup() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div>
            <Auth type='signup'/> 
        </div>
        <div>
            <Qoute />
        </div>
      </div>
    </div>
  );
}