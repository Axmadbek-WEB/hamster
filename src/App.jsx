// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import coin from './assets/img/Group 9.svg'
import energi from './assets/img/Vector.png'
import './App.css'
function click() {
  const click1 = document.getElementById("click1")
  const click2 = document.getElementById("click2")
  click.style.scale = "1.2"
  click1.style.scale = "1.2"
  click2.style.scale = "1.2"
  click.style.transition = "all 0.3s"
  click1.style.transition = "all 0.3s"
  click2.style.transition = "all 0.3s"

}



// function click1(){
//   const click=document.getElementById("click")
//   const click1=document.getElementById("click1")
//   const click2=document.getElementById("click2")
//   click.style.scale="1.2"
//   click1.style.scale="1.2"
//   click2.style.scale="1.2"
//   click.style.transition="all 0.3s"
//   click1.style.transition="all 0.3s"
//   click2.style.transition="all 0.3s"
// }
// function click2(){
//   const click=document.getElementById("click")
//   const click1=document.getElementById("click1")
//   const click2=document.getElementById("click2")
//   click.style.scale="1.2"
//   click1.style.scale="1.2"
//   click2.style.scale="1.2"
//   click.style.transition="all 0.3s"
//   click1.style.transition="all 0.3s"
//   click2.style.transition="all 0.3s"
// }


function App() {
  const hamster = document.getElementById("hamster")
  const [count, setCount] = useState(0);
  const [levle, setlevle] = useState(1);
  const [earenCount, setEarnCount] = useState(1);
  const [levelup, SetLevleUp] = useState(20)
  // const [power, setPower] = useState(100);

  function work() {
    if (power == 0 || power < 0) {
      hamster.disabled = true;
    } else {
      setCount((count) => count + earenCount);
      setPower(power - earenCount)
      switch (count) {
        case 19: setlevle(levle + 1); setEarnCount(earenCount + 1); SetLevleUp(100); break;
        case 100: setlevle(levle + 1); setEarnCount(earenCount + 1);SetLevleUp(200); break;
        case 200: setlevle(levle + 1); setEarnCount(earenCount + 1);SetLevleUp(500); break;
      }
    }

    if (power == 8500 || power > 8500) {
      hamster.disabled = true;
    }
  }

  const [power, setPower] = useState(8490);

  useEffect(() => {
    const interval = setInterval(() => {
      // setPower(prevPower => prevPower + 3);
      setPower((prevPower) => (prevPower < 8500 ? prevPower + 3 : 8500));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function showPlus(e){
    const container = e.target.parentNode;
    const plusOne =document.createElement("div");
    plusOne.classList.add("h2");
    plusOne.innerText="+"+earenCount;
    const x = e.offsetX;
    const Y = e.offsetY;
    plusOne.style.left=`${x}px`;
    plusOne.style.top=`${Y}px`;
    plusOne.style.position="absolute";

    container.appendChild(plusOne);

    setTimeout(() => {
      plusOne.remove()
    }, 1000)

  }



  return (
    <div className='cont'>
      <h1 style={{ margin: '40px' }}>Hamster Kombat</h1>
      <div className="hamster-coin-info">
        <div className="Tap">
          <h2 style={{ color: 'orange' }}>Earn per tap</h2>
          <div className="" style={{ display: 'flex', margin: '0px auto', justifyContent: 'center' }}>
            <img src={coin} alt="" />
            <p>+{earenCount}</p>
          </div>
        </div>
        <div className="levl-up">
          <h2 style={{ color: 'blue' }}>Coins to level up</h2>
          <div className="">
            <p>{levelup}</p>
          </div>
        </div>
        <div className="hour">
          <h2 style={{ color: 'greenyellow' }}>Profit per hour</h2>
          <div className="" style={{ display: 'flex', margin: '0px auto', justifyContent: 'center' }}>
            <img src={coin} alt="" />
            <p>+0</p>
          </div>
        </div>
      </div>
      <div className="hamster-coin cont">
        <div className="coin-info">
          <img src={coin} alt="" />
          <h1>{count}</h1>
        </div>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster" id='hamster' onClick={() => {work(),showPlus(event)}}>
          <div class="wheel" id='click2'></div>
          <div class="hamster">
            <div class="hamster__body">
              <div class="hamster__head">
                <div class="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div class="hamster__nose"></div>
              </div>
              <div class="hamster__limb hamster__limb--fr"></div>
              <div class="hamster__limb hamster__limb--fl"></div>
              <div class="hamster__limb hamster__limb--br"></div>
              <div class="hamster__limb hamster__limb--bl"></div>
              <div class="hamster__tail"></div>
            </div>
          </div>
          <div class="spoke" id='click1'></div>
          <h2 className='h2' id='pluse'>+{earenCount}</h2>
        </div>
      </div>
      <div className="energi">
        <div className="energi1">
          <img src={energi} alt="" />
          <h2>{power}/ 8500</h2>
        </div>
        <h2>Levle : {levle}</h2>
      </div>
    </div>


  )
}

export default App
