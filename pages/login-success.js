import Router from 'next/router';
import Axios from 'axios';
import Config from '../components/config';

export default class extends React.Component {

    static async getInitialProps ({ query, res }) {
        

        return {
            oauth_token: query.oauth_token,
            oauth_verify: query.oauth_verifier
        };
    }

    async componentDidMount () {
        let { oauth_token, oauth_verify } = this.props;
        let token = localStorage.getItem('token'); 
        
        try {
            let user = await Axios({
                method: 'post',
                url: `${Config.api}/connect`,
                data: { oauth_token, oauth_verify, token }
            });

            localStorage.setItem('user', JSON.stringify(user.data));
    
            Router.push('/');
        } catch (exc) {
            console.log(exc);
            //Router.push('/login-failed');
        }
    }

    render () {
        return <b>...</b>;
    }
}