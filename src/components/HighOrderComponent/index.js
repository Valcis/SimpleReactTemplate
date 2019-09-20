import React, {useEffect} from 'react'
//import {connect} from 'react-redux'
//import storeToken from '../../store/token'
//import * as actions from '../../actions'



export default ((WrappedComponent) => {
   return WrappedComponent
})




/** EJEMPLO : ***/
 /* export default ((WrappedComponent) => {
    const ComposedComponent = (props) => {
        useEffect(() => {
            if (!storeToken.getToken('token') || (!storeToken.getLocalStorage("userId"))) {
                props.history.push('/')
            }
        }, [props])

        return <WrappedComponent {...props}/>
    }

    const mapStateToProps = state => {
        return {
            userId: state.userId
        }
    }

    return connect(mapStateToProps, actions)(ComposedComponent)
})*/


