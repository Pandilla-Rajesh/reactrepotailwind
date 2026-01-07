import React from 'react'
import { Button } from 'react-bootstrap'

const ReUseButton = ({ label, onClick, type = "button", disabled, variant = "primary" }) => {
    return (
        <Button type={ type } onClick={ onClick } disabled={ disabled }
            className={ `btn btn-${variant}` } >
            { label }
        </Button>
    )
}

export default ReUseButton