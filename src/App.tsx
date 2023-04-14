import React from 'react';
import Game from './component/Game'; // 导入游戏组件

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Personal Website</h1>
      <Game /> {/* 渲染游戏组件 */}
    </div>
  );
};

export default App;
