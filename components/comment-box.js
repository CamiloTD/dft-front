export default class CommentBox extends React.Component {
    state = { text: "" };
    
    onChangeText (text) {
        this.setState({ text });
    }

    render () {
        let { user, post, reload } = this.props; 
        return (
            <div className="comment-box">
                <img src={user.profile_image_url} />
                <input type="text" onChange={(e) => this.onChangeText(e.target.value)} />
                <button className="send" onClick={() => post(this.state.text)}>Tweet</button>
                <button className="reload" onClick={() => reload()}>Reload</button>
            
                <style jsx>{`
                    button {
                        outline: none;
                    }
                    .comment-box {
                        display: grid;
                        grid-template-columns: 64px auto 76px 64px;
                        width: 100%;
                    }

                    input {
                        width: 100%;
                        border: 1px solid rgba(0, 0, 150, .125);
                        border-radius: 50px 0px 0px 50px;
                        outline: none;
                        padding-left: 10px;
                        font-family: system-ui;
                    }

                    img {
                        border-radius: 50%;
                    }

                    .send {
                        width: 100%;
                        border: none;
                        color: white;
                        font-weight: 900;
                        background: #00aced;
                        cursor: pointer;
                    }

                    .reload {
                        border-radius: 0px 50px 50px 0px;
                        width: 100%;
                        border: none;
                        color: #00aced;
                        font-weight: 900;
                        background: white;
                        cursor: pointer;
                        border: 1px solid #00aced;
                    }
                `}</style>
            </div>
        )
    }

}