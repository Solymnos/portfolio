import React from 'react'

function ThemeSelector(props) {

    function setTheme(newTheme)
    {
        props.onChange(newTheme)
    }

    return (
        <div className='ThemeSelector'>
            <div onClick={() => setTheme('light')}>
                Light
            </div>
            <div onClick={() => setTheme('dark')}>
                Dark
            </div>
        </div>
  )
}

export default ThemeSelector