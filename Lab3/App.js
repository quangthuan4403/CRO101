
import { store } from "./Redux/stores";
import { Provider } from "react-redux";
import Todos from "./Todo";
export default function App() {
	return (
		<Provider store={store}>
			<Todos />
		</Provider>
	);
}
