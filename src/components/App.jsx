import { useState } from 'react';
import { searchArtworks } from '../api';
import { Footer } from './Footer';
import { ImageDetails } from './ImageDetailsPage';
import { SearchForm } from './SearchForm';

import './App.css';

export function App() {
	const [artwork, setArtwork] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState(null);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((data) => {
			setArtwork(json.data || []).catch((err) => {
				console.error(err);
			});
		});
	}

	function handleArtworkClick(data) {
		setSelectedArtwork(data);
	}

	function handleBackClick() {
		setSelectedArtwork(null);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>

			<SearchForm onSearchSubmit={onSearchSubmit} />

			{selectedArtwork ? (
				<ImageDetails
					selectedArtwork={selectedArtwork}
					onBackClick={handleBackClick}
				/>
			) : (
				<ul>
					<li key={data.image_id}>
						{data.title} by{' '}
						{data.artist_title ? data.artist_title : 'Unknown author'}
						<button onClick={handleArtworkClick}>Select</button>
					</li>
				</ul>
			)}

			<Footer />
		</div>
	);
}
