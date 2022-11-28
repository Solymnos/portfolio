import { useEffect, useState  } from 'react';
import './App.css';
import ThemeSelector from './components/ThemeSelector';
import ThemeColorSelector from './components/ThemeColorSelector';
import HomeView from './views/HomeView';

function App() {

  const [ theme , setTheme ] = useState('light');
  const [ themeColor, setThemeColor ] = useState('black');

  const toogleTheme = (newTheme) =>
  {
    if (theme !== newTheme)
    {
      setTheme(newTheme);
    }
  }

  const toogleThemeColor = (newThemeColor) =>
  {
    if (themeColor !== newThemeColor)
    {
      setThemeColor(newThemeColor);
    }
  }

  useEffect(() =>
  {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={ toogleTheme }>Change Theme</button>
      <HomeView/>
      <ThemeSelector value={theme} onChange={setTheme}/>
      <ThemeColorSelector />
    </div>
  );
}

export default App;
