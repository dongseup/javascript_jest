import { useCallback, useState } from 'react';
import CountButtons from './components/CountButtons';
import CountView from './components/CountView';

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  const decrementHandler = useCallback(() => {
    setCount(count => count - 1);
  }, []);

  return (
    <div>
      <CountView count={count} />
      <CountButtons
        incrementFn={incrementHandler}
        decrementFn={decrementHandler}
      />
    </div>
  );
}

export default App;
