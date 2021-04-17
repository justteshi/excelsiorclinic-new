import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const FeedbackAlerts = (props) => {
    const alert = useAlert()

    useEffect(() => {
        const {error} = props
        if (error.status !== null){
            if(error.msg.title) {
                alert.error(`Title: ${error.msg.title.join()}`)
            }
            if(error.msg.stars) {
                alert.error(`Rate us: ${error.msg.stars.join()}`)
            }
            if(error.msg.message) {
                alert.error(`Message: ${error.msg.message.join()}`)
            }

        }
        
    }, [props])

    return (
        <div>
            
        </div>
    )
}

FeedbackAlerts.propTypes = {
    error: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    error: state.errors
})

export default connect(mapStatetoProps)(FeedbackAlerts)