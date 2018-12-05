export default class Navbar extends React.Component {
    render () {
        let { user, login, logout } = this.props;
        
        return <div className="navbar">
            <img className="profile-image" src={user? user.profile_image_url : "https://abs.twimg.com/a/1404172626/images/oauth_application.png"}/>
            <span className="brand">{ !user? "DexFreight Twitter" : user.screen_name}</span>
            { !user? <button className="btn login" onClick={login}>Login</button> : 
                     <button className="btn logout" onClick={logout}>Logout</button>}
            <style jsx>{`
                .navbar * {
                    display: inline-block;
                }
                .profile {
                    display: flex;
                    align-items: center;
                }

                .profile-image {
                    border-radius: 50%;
                    height: 36px;
                    color: white;
                    margin-left: 20px;
                }

                .navbar {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    background: #00aced;
                    height: 48px;
                    font-family: system-ui;
                    font-weight: 900;
                    box-shadow: 0px 2px 8px rgba(0,0,0,.25);
                }

                .brand {
                    color: #c0deed;
                    padding-left: 20px;
                }

                .btn {
                    display: inline-block;
                    margin-left: calc(100% - 460px);
                    font-family: system-ui;
                    font-weight: 900;
                    width: 200px;
                    border-radius: 6px;
                    border: 1px solid rgba(0,0,0,.125);
                    background: #1dcaff;
                    color: white;
                    font-size: 15px;
                    padding: 10px;
                    cursor: pointer;
                    float: right;
                }
                
                .logout {
                    background: #ff6677;
                }

                .btn:hover {
                    box-shadow: 0px 0px 8px rgba(255,255,255, .5);
                }
            `}</style>
        </div>
    }
};