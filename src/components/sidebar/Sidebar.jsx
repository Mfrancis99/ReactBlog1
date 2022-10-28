import './sidebar.css';
import img from '../../images/sidebarImg.jpg';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
            </div>
            <img src={img} alt="" className="sidebarImg" />
            <p className='sidebarparag'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
                nostrum tempora. Hic beatae corrupti omnis est nam, autem, nulla,
                iusto nisi temporibus nemo facilis architecto.
            </p>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {/* <div className="sidebarList1">
                        <li className='sidebarListItem'>Life</li>
                        <li className='sidebarListItem'>Sport</li>
                        <li className='sidebarListItem'>HighTech</li>
                    </div>
                    <div className="sidebarList2">
                        <li className='sidebarListItem'>Music</li>
                        <li className='sidebarListItem'>Style</li>
                        <li className='sidebarListItem'>Cinema</li>
                    </div> */}
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>HighTech</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarRS">
                    <i className="topIcon fa-brands fa-square-facebook"></i>
                    <i className="topIcon fa-brands fa-square-twitter"></i>
                    <i className="topIcon fa-brands fa-square-instagram"></i>
                    <i className="topIcon fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;