import Contact from "./components/ContactSection";
import Info from "./components/Info";
import './index.css';


const App = () => {

    return (
        <div id={"app"} className={'app'}>
            <div className={'main'}>
                <Info />
                <Contact />
            </div>
        </div>
    );
};
export default App;
