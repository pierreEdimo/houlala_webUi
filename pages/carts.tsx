import AppHeader from "../components/app.header";
import BottomNavigator from "../components/bottom.navigator";

const title = "Houlala";

export default function Cart() {
    return (
        <div>
            <AppHeader title={title}/>
            <p>Chariot works</p>
            <BottomNavigator/>
        </div>
    );
}