import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const ContactsAlerts = (props) => {
    const alert = useAlert()

    useEffect(() => {
        const {error} = props
        console.log(error)
        if (error.status !== null){
            if(error.msg.name) {
                alert.error(`Name: ${error.msg.name.join()}`)
            }
            if(error.msg.phone) {
                alert.error(`Phone: ${error.msg.phone.join()}`)
            }
            if(error.msg.messageOne) {
                alert.error(`Message: ${error.msg.messageOne.join()}`)
            }
        }
    }, [props])

    return (
        <div>
            
        </div>
    )
}

ContactsAlerts.propTypes = {
    error: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    error: state.errors
})

export default connect(mapStatetoProps)(ContactsAlerts)