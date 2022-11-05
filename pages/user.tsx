import AppHeader from "../components/app.header";
import BottomNavigator from "../components/bottom.navigator";

const title = "Houlala";

export default function User() {
    return (
        <div>
            <AppHeader title={title}/>
            <p>User Works.</p>
            <BottomNavigator/>
        </div>
    )
}