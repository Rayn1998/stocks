import React from 'react';

function SideMenu() {
  return (
    <div style={{ color: '#fff' }}>
      <button>show all</button>
      <button>clear all</button>
      <div>
        <ul>
          <li>fire
            <ul>
              <li>big fire</li>
              <li>fire at cam</li>
              <li>torch</li>
              <li>burning house</li>
              <li>embers</li>
              <li>flame</li>
            </ul>
          </li>
          <li>aura</li>
          <li>eplosions
            <ul>
              <li>car explosions</li>
              <li>big explosions</li>
              <ul>
                <li>fireball
                  <ul>
                    <li>fireball at cam</li>
                    <li>fireball day</li>
                    <li>fireball debris</li>
                    <li>fireball side</li>
                    <li>fireball wide</li>
                  </ul>
                </li>
              </ul>
            </ul>
          </li>
          <li>blood</li>
          <li>charges</li>
          <li>crowd</li>
          <li>debris</li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu