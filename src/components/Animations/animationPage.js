import React from 'react';
import animations from './Animations';
import Display from '../Display/Display';

function animationPage() {
	const things = animations.map((item) => {
		return <Display comp={item.comp} />;
	});

	return <div className="animation_page">{things}</div>;
}

export default animationPage;
