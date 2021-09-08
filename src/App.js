
import {ListOfPokemons, Pokemon} from "./pages";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App w-full">
        <Switch>
            <Route exact path="/" component={ListOfPokemons}/>
            <Route path="/pokemon" component={Pokemon}/>
        </Switch>
    </div>
  );
}

export default App;
