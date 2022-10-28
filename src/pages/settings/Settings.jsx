import './settings.css'
import Sidbar from '../../components/sidebar/Sidebar';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label className='profilePicture'>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=
                                   rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=
                                   format&fit=crop&w=870&q=80" alt="" className="settingsImg" />
                        <label htmlFor="fileInput">
                            <i className="profilePPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label>User Name</label>
                    <input type="text" placeholder='Manitra' />
                    <label>Email</label>
                    <input type="text" placeholder='manitra@hotmail.fr' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidbar />

        </div>)

}

export default Settings;