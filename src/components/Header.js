import PropTypes from 'prop-types'
import Button from'./Button'

// const Header = (props) => {
const Header = ({title}) => {
    return (
        <header className='header'>
            {/* <h1 style={{color:'pink', backgroundColor:'black'}}>{title}</h1> */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>

            {/* reusable components
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
