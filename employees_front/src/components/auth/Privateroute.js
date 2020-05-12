import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getSession } from '../helpers/helpers'


const checkAuth = () => {
    return getSession() ? true : false
}

export default class Privateroute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        }
    }
    componentWillMount() {
        this.setState({
            auth: checkAuth() && !this.state.auth
        })
    }
    render() {
        const { component: Component, ...res } = this.props

        return (
            <Route
                {...res}
                render={ props =>
                    this.state.auth ?
                    <Component {...props} />
                    :
                    <Redirect to={{ pathname:'/login', state: { from: this.props.location } }} />
                }
            />
        )
    }
}

// const Privateroute = props => {
//     const [ auth, setAuth ] = useState(false)
//     //setAuth(checkAuth() && !auth)

//     const { component: Component, ...res } = props

//     return (
//         <Route
//             {...res}
//             render={ props =>
//                 auth ?
//                 <Component {...props} />
//                 :
//                 <Redirect to={{ pathname:'/login', state: { from: props.location } }} />
//             }
//         />
//     )
// }

// export default Privateroute
