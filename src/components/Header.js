import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from'./Button'

// const Header = (props) => {
const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        <header className='header'>
            {/* <h1 style={{color:'pink', backgroundColor:'black'}}>{title}</h1> */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            { location.pathname === '/' && <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>}
            {/* reusable components
            <Button />
             <Button color='pink' text='Hello'/>
            <Button color='blue' text='Hello'/>
            <Button color='red' text='Hello'/> */}
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker',
}

Header.propTypes={
    title: PropTypes.string,
}

// CSS in JS React
// const headingStyle = {
//     color:'pink', 
//     backgroundColor:'black'
// }

export default Header
