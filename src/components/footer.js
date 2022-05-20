import PropTypes from 'prop-types';

function Footer(props) {
	return (
		<footer>
			<h4>{props.title}</h4>
			<p>Copyright {props.year}</p>
		</footer>
	)
}

Footer.propTypes = {
	title: PropTypes.string
}

Footer.defaultProps = {
	title: "Footer title"
}

export default Footer;