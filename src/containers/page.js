import Header from '../components/header';
import Footer from '../components/footer';
import Photos from '../components/photos';
import Main from './main';
import tracks from '../data/tracks';

function Page() {
	return (
		<>
			<Header title="Header" />
			<Main data={tracks}>
				<h2>Top 10 albums</h2>
				<Photos data={tracks} />
			</Main>
			<Footer title="Footer" year={new Date().getFullYear()}/>
		</>
	);
}

export default Page;