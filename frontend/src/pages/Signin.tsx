import React from 'react';
import { Qoute } from '../Components/Qoute';
import { Auth } from '../Components/Auth';

export function Signin() {
  return (
    <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                  <Auth type="signin" />
              </div>
              <div className="hidden lg:block">
                  <Qoute />
              </div>
          </div>
     </div>
  );
}