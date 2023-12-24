import { useState } from 'react';
import './App.css'; 
import classNames from 'classnames';

export default function App () {
  
  const [divsColored, setDivsColored] = useState({
    triangle: false,
    round: false,
    square: false,
  });

  const handleDevilClick = (div) => {
    if (div === 'triangle') {
     
      setDivsColored({
        triangle: !divsColored.triangle,
        round: !divsColored.round,
        square: !divsColored.square,
      });
    } else if (div === 'round') {
      setDivsColored({
        triangle: !divsColored.triangle,
        round: divsColored.round,
        square: !divsColored.square,
      });
    } else if (div === 'square') {
     
      setDivsColored({
        triangle: divsColored.triangle,
        round: divsColored.round,
        square: !divsColored.square,
      });
    }
  }

  return (
    <div className="div-icons">

      <div 
      className={classNames("div-icon","triangle",{
        colored:divsColored.triangle,
        white:!divsColored.triangle
      })}
      onClick={() => handleDevilClick('triangle')}>
      </div>

      <div 
      className={classNames("div-icon","round",{
        colored:divsColored.round,
        white:!divsColored.round
      })}
      onClick={() => handleDevilClick('round')}>
      </div>

      <div 
      className={classNames("div-icon","square",{
        colored:divsColored.square,
        white:!divsColored.square
      })}
      onClick={() => handleDevilClick('square')}></div>
    </div>
  );
  }

