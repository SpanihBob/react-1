// Создайте и запустите приложение React, выводящее информацию о вашем родном городе в браузер. Например: название
// города, название страны, количество жителей, флаг города, флаг страны и т.д.

import './App.css';
import CompOne  from "./components/CompOne";//импортируем CompOne
import CompTwo from './components/CompTwo';
function App() {
  return (
    <div className="App">
      <CompOne />
      <CompTwo />
    </div>
  );
}

export default App;
