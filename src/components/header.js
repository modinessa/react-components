import PropTypes from 'prop-types';

function Header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string
}

Header.defaultProps = {
	title: "Header title"
}

export default Header;