import '../App.css';

import Header from '../components/Header';
import Menu from '../components/Menu';
// import Dashboard from '../components/Dashboard';

import Footer from '../components/Footer';
import '../css/menu.css';
import Dashboard from '../components/Dashboard'
import AddProgram from '../components/addProgram';



function Home() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Dashboard />
        <Footer />
        </div>
    );
}

export default Home;