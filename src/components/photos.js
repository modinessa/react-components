import PropTypes from 'prop-types';

function Photos(props) {
	const data = props.data.slice(props.showCount);

	return (
		<ul className="container">
			{data.map((track) => 
				<li key={track.id}>
					<img src={track.url} alt={track.title}/>
					<p>{track.title}</p>
				</li>
			)}
		</ul>
	)
}

Photos.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			"albumId": PropTypes.number,
			"id": PropTypes.number,
			"title": PropTypes.string,
			"url": PropTypes.number,
			"thumbnailUrl": PropTypes.string
		})
	),
	showCount: PropTypes.number
}

export default Photos;