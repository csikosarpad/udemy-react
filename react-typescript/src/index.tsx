import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import RepositoriesList from "./components/RepositoriesList";

//import GuestList from "./state/GuestList.";
//import UserSearch from "./state/UserSearch";
//import EventComponent from "./events/EventComponent";
//import UserSearch from './classes/UserSearch';
//import UserSearch from './refs/UserSearch';


/*const mockData = [
    { name: "Sarah", age: 20 },
    { name: "Emil", age: 30 },
    { name: "Rondha", age: 24 },
    { name: "Alex", age: 28 }
];

const users = mockData;
*/
const App = () => {
    return <Provider store={store}>
        <div>Hello</div>
        <RepositoriesList />
    </Provider>
}

ReactDOM.render(<App />, document.getElementById("root"));