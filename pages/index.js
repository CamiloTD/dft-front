import Config from '../components/config';
import Axios from 'axios';
import Booga from 'booga';
import Navbar from '../components/navbar';
import Tweets from '../components/tweets';
import MainHeader from '../components/main-header';

export default class Index extends React.Component {
    state = {}

    async logout () {
        let token = localStorage.getItem('token');

        await Axios({
            method: 'post',
            url: `${Config.api}/disconnect`,
            data: { token }
        });

        localStorage.clear()
        window.location.reload()
    }

    async post (status) {
        let token = localStorage.getItem('token');

        await Axios({
            method: 'post',
            url: `${Config.api}/tweet`,
            data: { token, status }
        });

        this.setState({ tweets: await this.loadTweets() });
    }

    async componentDidMount () {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        
        try { user = user && JSON.parse(user); } catch(exc) { user = null };

        let tweets = await this.loadTweets();

        this.setState({ tweets, user });
    }
    
    async loadTweets () {
        let token = localStorage.getItem('token');

        if(token){
            try {
                let tweets = await Axios({
                    method: 'get',
                    url: `${Config.api}/tweets`,
                    params: { token }
                });

                return tweets.data;
            } catch (exc) {
                console.log(exc);
                localStorage.clear();
                //window.location.reload();
            }
        }
    }

    async loginTwitter () {
        let { data } = await Axios(`${Config.api}/oauth_request`);

        localStorage.setItem('token', data.token)
        window.location = data.url;
    }

    render () {
        return <div>
            <Navbar
                tweets={this.state.tweets}
                user={this.state.user}
                login={() => this.loginTwitter()}
                logout={() => this.logout()}
            />
            <br/>
            <MainHeader login={() => this.loginTwitter()} user={this.state.user}/>
            { this.state.tweets &&
                <Tweets
                    tweets={this.state.tweets}
                    user={this.state.user}
                    post={(t) => this.post(t)}
                    reload={async () => this.setState({ tweets: await this.loadTweets() })}
                /> }

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>;
    }

}
    