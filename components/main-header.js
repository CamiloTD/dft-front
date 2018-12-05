export default ({ login, user }) => (
    <div className="no-tweets">
        {!user? (<div>
            <span className="title">Welcome to DexFreight Twitter</span>
            <img src="https://idescargar.com/wp-content/uploads/2017/05/descargar-twitter-apk-gratis-150x150.png" />
            <span className="subtitle">A simple and lightweight twitter simulator.</span>
            <span className="subtitle2">¿Why dont you <span className="login" onClick={login}>login</span>?</span>
        </div>) : (<div>
            <span className="title">Welcome @{user.screen_name}</span>
            <img src="https://idescargar.com/wp-content/uploads/2017/05/descargar-twitter-apk-gratis-150x150.png" />
        </div>)}
        <style jsx>{`
            span {
                display: block;
                font-family: system-ui;
                font-weight: 600;
            }

            .title {
                color: #747f84;
                font-size: 30px;
            }

            .subtitle, .subtitle2 {
                color: #747f84;
            }

            .subtitle2 {
                margin-top: 10px;
                font-size: 15px;
            }

            .no-tweets {
                text-align: center;
                width: 100%;
            }

            .login {
                display: inline-block;
                color: #00aced;
                text-decoration: underline;
                cursor: pointer;
            }
        `}</style>
    </div>
)