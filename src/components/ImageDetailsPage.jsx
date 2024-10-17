export function ImageDetails({ data, onBackClick }) {
	return (
		<div className="image-details-page">
			<h2>{data.title}</h2>
			<p>By {data.artist_title ? data.artist_title : 'Unknown artis'}</p>
			<span>{data.thumbnail}</span>
			<img
				alt={data.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
			/>
			<button onClick={onBackClick}>Back to results</button>
		</div>
	);
}
