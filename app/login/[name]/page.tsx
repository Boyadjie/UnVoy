import React from 'react';

export default function page({ params }: { params: { name: string } }) {
	return (
		<div>
			<h1>Hello {params.name}</h1>
		</div>
	);
};
