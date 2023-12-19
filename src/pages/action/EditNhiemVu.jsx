import '../../App.css';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import EditNhiemVuC from '../../components/editNhiemVu';

function EditNhiemVu() {
    const { id } = useParams();
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <EditNhiemVuC nhiemvuId={id}/>
        <Footer />
        </div>
    );
}

export default EditNhiemVu;