import BodyFC from './components/BodyFC';
import HeaderFC from './components/HeaderFC';
import NavigationOptions from './components/NavigationOptions';
import TableFC from './components/TableFC';

function App() {
  return (
    <div className="app">
      <HeaderFC />
      <BodyFC>
        <NavigationOptions />
        <TableFC />
      </BodyFC>
    </div>
  );
}

export default App;
