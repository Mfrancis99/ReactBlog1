import './header.css';
import img from '../../images/headerImg.jpg';
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className='headerTitleSl'>ReactJS & NodeJS</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img src={img} alt="" className="headerImg" />
        </div>
    );
}

export default Header;
