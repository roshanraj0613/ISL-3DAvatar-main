import { useState} from 'react';
import imgData from './data';

const Person = () => {
  const [searchValue, setSearchValue] = useState('');
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const images = ['/letters/space.png'];

    const vectorized = () => {
      const charOfWords = searchValue.split(/(\s+)/).map((word) => word.split(''));
      
      charOfWords.forEach((word) => {
        word.map((char) => {
          images.push(imgData.filter((obj) => obj.id === char).map((obj) => obj.url));
          
        });
      });

    };
    vectorized();
    const handleClick = () => {
      const newIntervalId = setInterval(() => {
        if (intervalId) {
          clearInterval(intervalId);
          return 0;
        }
        setCount((prevCount) => (prevCount + 1) % images.length);
      }, 1100);
      setIntervalId(newIntervalId);
    };
    return (
      <div>
        <h4>component has been re-rendered for {count} Times</h4>
        <input
          id='search'
          type="text"
          placeholder="Search (LowerCase Only)"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className='btn' onClick={handleClick}>
          {intervalId ? 'Translating' : 'Translate'}
        </button>
        <br />
        <span>  NOTE: Only LowerCase is allowed</span>
        <div className='container'>
          {console.log(count)}
          <img className='img' src={images[count]} />
        </div>
      </div>
    );
  };

export default Person;



