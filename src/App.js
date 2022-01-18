import './App.css';
import Videos from './components/time/Videos';
import List from './components/highlight/List';

import videoList from './data/VideoList';
import blockList from './data/BlockList';

function App() {
  return (
    <>    
    <div className='title'>Форматирование даты публикации</div>
    <div className='container'>
    <Videos list={videoList} />
    </div>
        
    <div className='title'>Популярное и новое</div>
    <div className='box'>
    <List list={blockList} />
    </div>
    </>
  );
}

export default App;
