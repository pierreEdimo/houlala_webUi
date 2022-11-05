import AppHeader from "../components/app.header";
import BottomNavigator from "../components/bottom.navigator";

const title = "Houlala";

export default function Categories() {
    return (
        <div>
            <AppHeader title={title}/>
            <p>Categories work</p>
            <BottomNavigator/>
        </div>
    )
}