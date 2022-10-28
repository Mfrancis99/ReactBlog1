import './single.css';
import Sidbar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

//----- Cette page va changer la page HOME su APP.JSX qu'on a mis au début ------------
const Single = () => {
    return (
        <div className="single">
            <SinglePost />
            <Sidbar />
        </div>);
}

export default Single;