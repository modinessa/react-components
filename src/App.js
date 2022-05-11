import './App.css';
import PropTypes from 'prop-types';

const tracks = 
[
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
		"albumId": 1,
		"id": 2,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "https://via.placeholder.com/600/771796",
		"thumbnailUrl": "https://via.placeholder.com/150/771796"
	},
	{
		"albumId": 1,
		"id": 3,
		"title": "officia porro iure quia iusto qui ipsa ut modi",
		"url": "https://via.placeholder.com/600/24f355",
		"thumbnailUrl": "https://via.placeholder.com/150/24f355"
	},
	{
		"albumId": 1,
		"id": 4,
		"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
		"url": "https://via.placeholder.com/600/d32776",
		"thumbnailUrl": "https://via.placeholder.com/150/d32776"
	},
	{
		"albumId": 1,
		"id": 5,
		"title": "natus nisi omnis corporis facere molestiae rerum in",
		"url": "https://via.placeholder.com/600/f66b97",
		"thumbnailUrl": "https://via.placeholder.com/150/f66b97"
	},
	{
		"albumId": 1,
		"id": 6,
		"title": "accusamus ea aliquid et amet sequi nemo",
		"url": "https://via.placeholder.com/600/56a8c2",
		"thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
	},
	{
		"albumId": 1,
		"id": 7,
		"title": "officia delectus consequatur vero aut veniam explicabo molestias",
		"url": "https://via.placeholder.com/600/b0f7cc",
		"thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
	},
	{
		"albumId": 1,
		"id": 8,
		"title": "aut porro officiis laborum odit ea laudantium corporis",
		"url": "https://via.placeholder.com/600/54176f",
		"thumbnailUrl": "https://via.placeholder.com/150/54176f"
	},
	{
		"albumId": 1,
		"id": 9,
		"title": "qui eius qui autem sed",
		"url": "https://via.placeholder.com/600/51aa97",
		"thumbnailUrl": "https://via.placeholder.com/150/51aa97"
	},
	{
		"albumId": 1,
		"id": 10,
		"title": "beatae et provident et ut vel",
		"url": "https://via.placeholder.com/600/810b14",
		"thumbnailUrl": "https://via.placeholder.com/150/810b14"
	}
]

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

function Photos(props) {
	return (
		<ul className="container">
			{props.data.map((track) => 
				<li key={track.id}>
					<img src={track.url} alt={track.title}/>
					<p>{track.title}</p>
				</li>
			)
			}
		</ul>
	)
}

Photos.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			"albumId": PropTypes.number,
			"id": PropTypes.number,
			"title": PropTypes.string,
			"url": PropTypes.string,
			"thumbnailUrl": PropTypes.string
		}
		)
	),
}

function Main(props) {
	return (
		<>
			<section>
				{props.children}
				<Photos data={tracks} />
			</section>
		</>
	)
}

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

function Page() {
  return (
		<>
			<Header title="Header" />
			<Main data={tracks}>
				<h2>Top 10 albums</h2>
			</Main>
			<Footer title="Footer" year={new Date().getFullYear()}/>
		</>
  );
}

function App() {
	return (
		<Page />
	)
}

export default App;
