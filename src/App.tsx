import Body from './components/Body/';
import Header from './components/Header';
import NavigationOptions from './components/NavigationOptions';
import TableFC from './components/TableFC';

function App() {
  return (
    <div className="app">
      <Header />
      <Body>
        <NavigationOptions />
        <TableFC />
      </Body>
    </div>
  );
}

export default App;
