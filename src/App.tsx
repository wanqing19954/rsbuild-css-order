import { Button } from 'tea-component';
import api from './utils'
import { useEffect } from 'react';
const App = () => {

  const fetchArea = async () => {
    const res = await api.areaList()
    console.log('res',res)
  }

  useEffect(() => {
    fetchArea()
  }, [])
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button
        type='primary'
        onClick={() => {
          console.log('点击');
        }}
      >
        点击验证
      </Button>
    </div>
  );
};

export default App;
