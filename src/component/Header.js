
import propTypes from 'prop-types'
import Button from './button' 

const Header = ({title, onAdd, showAdd}) => {
   
    return (
        <header className='header'>
            <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}  />  
      
        </header>
    )
}

Header.propTypes = {
    title: propTypes.string,
}

Header.defaultProps = {
    title: 'task tracker',
}
// css in jss
// const headingstyle = {
// color: 'red',
//  backgroundColor: 'black'
// }

export default Header