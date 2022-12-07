import Header from './components/Header/AppHeader';
import Menu from './components/BurgerIngredient/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor.jsx';
import './components/Header/AppHeader.css';
import './components/BurgerIngredient/BurgerIngredients.css';
import './components/BurgerConstructor/BurgerConstructor.css';
import '../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';


function App() {
  return (
    <div className='app'>     
      <Header/>
      <div className='main'>
        <Menu />
        <BurgerConstructor/>
      </div>
    </div>
  );
}

export default App;
