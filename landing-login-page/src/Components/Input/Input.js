import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EyeIcon from '../EyeIcon/EyeIcon'

import './Input.css'

const Input = ({ type, name, value, placeholder }) => {
  const [inputType, setInputType] = useState(type)

  const handleShowPasswordIconClick = () => {
    if (inputType === 'email') {
      setInputType('password')
    } else {
      setInputType('email')
    }
  }
  return (
    <div className="input">
      <label>{name}</label>
      <input type={inputType} placeholder={placeholder} />
      {type === 'password' && (
        <i className="icon" onClick={handleShowPasswordIconClick}>
          <EyeIcon />
        </i>
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
}

export default Input
