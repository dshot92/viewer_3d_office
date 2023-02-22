import { React, useState, useEffect } from "react";

function MouseSVG() {
	return (
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.83 40.01">
			<rect id="wheel" x="12.26" width="4.32" height="12.5" />
			<path id="left" d="M3.3,4.24C5.51,1.83,7.71,.42,11.2,0V12.5H0c0-3.1,1.1-5.85,3.3-8.25Z" />
			<path id="body" d="M28.83,27.4c0,3.49-1.48,6.46-4.43,8.92-2.95,2.46-6.52,3.69-10.69,3.69h-.01c-3.79,0-7.02-1.23-9.69-3.69S0,30.89,0,27.4V15.93H28.83v11.46Z" />
			<path id="right" d="M17.62,12.5V0c3.49,.42,5.71,1.83,7.91,4.24,2.2,2.41,3.3,5.16,3.3,8.25h-11.21Z" />
		</svg>
	);
}

function TapSVG() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 414.22 682.88">
			<path d="M401.09 337.78a44.814 44.814 0 00-31.66-13.13 44.448 44.448 0 00-24.95 7.6 44.755 44.755 0 00-28.09-27.72 44.722 44.722 0 00-39.1 5.32 44.628 44.628 0 00-26.66-27.23 44.6 44.6 0 00-37.97 3.28V156.66a44.753 44.753 0 00-13.03-31.83c-8.41-8.45-19.84-13.21-31.76-13.21s-23.35 4.76-31.76 13.21a44.795 44.795 0 00-13.03 31.83v179.47c-16.97 1.43-30.81 8.55-41.14 21.28-33.79 41.61-15.67 130.25-14.88 134.01a11.12 11.12 0 002.05 4.47c43.19 56.81 73.46 106.02 76.37 115.2v60.7c.07 6.14 5.06 11.08 11.2 11.08s11.14-4.94 11.2-11.08V610.2c0-17.27-60.28-100.46-79.37-125.79-4.72-24.58-10.89-86.15 10.84-112.89a34.799 34.799 0 0123.74-12.84v72.35c.07 6.14 5.06 11.08 11.2 11.08s11.13-4.94 11.2-11.08V156.67c0-8 4.27-15.4 11.2-19.39 6.93-4 15.47-4 22.4 0 6.93 4 11.2 11.39 11.2 19.39v229.57c0 6.18 5.01 11.2 11.2 11.2s11.2-5.01 11.2-11.2v-61.59c0-8 4.27-15.4 11.2-19.4 6.93-4 15.47-4 22.4 0 6.93 4 11.2 11.4 11.2 19.4v83.99c.07 6.14 5.06 11.08 11.2 11.08s11.13-4.94 11.2-11.08v-61.59c0-8 4.27-15.4 11.2-19.4 6.93-4 15.47-4 22.4 0 6.93 4 11.2 11.4 11.2 19.4v83.99c.07 6.14 5.06 11.08 11.2 11.08s11.13-4.94 11.2-11.08v-61.59a22.41 22.41 0 016.5-15.95c4.2-4.24 9.93-6.62 15.9-6.62s11.69 2.38 15.9 6.62c4.2 4.24 6.54 9.98 6.5 15.95v82.47S347.1 614.8 347.1 615.82v55.99c.07 6.14 5.06 11.08 11.2 11.08s11.13-4.94 11.2-11.08v-54.47s44.79-162.9 44.79-163.9v-83.99a44.824 44.824 0 00-13.14-31.66z"></path>
			<path d="M167.85 89.47c6.18 0 11.2-5.01 11.2-11.2V11.08C178.98 4.94 173.99 0 167.85 0s-11.13 4.94-11.2 11.08v67.19a11.202 11.202 0 0011.2 11.2z"></path>
			<path d="M96.59 112.43c4.38 4.3 11.42 4.27 15.76-.07 4.35-4.35 4.37-11.38.07-15.76L64.91 49.09c-4.38-4.31-11.42-4.27-15.76.07-4.35 4.34-4.38 11.38-.07 15.76l47.51 47.51z"></path>
			<path d="M89.47 167.85c0-6.18-5.01-11.2-11.2-11.2H11.08C4.94 156.72 0 161.71 0 167.85s4.94 11.13 11.08 11.2h67.19c6.18 0 11.2-5.01 11.2-11.2z"></path>
			<path d="M246.24 167.85a11.202 11.202 0 0011.2 11.2h67.19c6.14-.07 11.07-5.06 11.07-11.2s-4.94-11.13-11.07-11.2h-67.19c-6.18 0-11.2 5.01-11.2 11.2z"></path>
			<path d="M231.2 115.71c2.97 0 5.82-1.18 7.91-3.28l47.51-47.51c4.31-4.38 4.27-11.42-.07-15.76-4.35-4.35-11.38-4.38-15.76-.07L223.28 96.6a11.2 11.2 0 00-2.43 12.2c1.73 4.19 5.81 6.91 10.34 6.91z"></path>
		</svg>
	);
}

function ZoomSVG() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 700.05 496.02">
			<path d="M698.47 367.34l-20.77-35.98-53.02-169.96a64.888 64.888 0 00-15.52-28.08l-45.98-48.81a43.155 43.155 0 00-30.1-13.52 43.18 43.18 0 00-30.86 11.69 42.713 42.713 0 00-12.44 21.82 43.08 43.08 0 00-38-.89 43.006 43.006 0 00-23.89 29.56 42.99 42.99 0 00-39.61-.09 42.993 42.993 0 00-22.89 32.33L257.3 77.28a43.236 43.236 0 00-60.76 5.32 43.21 43.21 0 005.44 60.85L377.44 286.5c.72 5.41-3.84 16.66-25.72 29.91-16.53.02-90.18 1.78-122.57 40.66-14.19 17.03-18.62 38.38-13.17 63.47.63 2.91 2.44 5.43 5 6.96 2.55 1.53 5.63 1.94 8.49 1.12.64-.18 64.83-18.32 130.12-25.31 51.45-5.5 122.3 23.11 133.04 28.36l18.57 31.86c2.99 5.13 9.57 6.88 14.71 3.91l.04-.02c5.16-2.98 6.92-9.57 3.95-14.73l-18.87-32.68a59.521 59.521 0 00-6.66-6.53c-7.06-4.07-86.18-38.15-147.07-31.61-50.95 5.45-99.98 17.14-121.88 22.82-.88-13.36 2.52-24.48 10.28-33.8 29.07-34.94 107.76-32.93 108.55-32.88 2.01.08 4-.42 5.73-1.44 50.75-29.3 38.01-58.05 36.28-61.41-.02-.04-.04-.07-.05-.11-.05-.09-.08-.16-.11-.19h-.02v.01c-.65-1.18-1.53-2.23-2.57-3.08L215.69 126.82a21.545 21.545 0 01-7.57-14.66c-.48-5.7 1.32-11.35 5.02-15.72a21.567 21.567 0 0130.39-2.55l177.91 145.05c4.61 3.76 11.41 3.07 15.17-1.54 3.76-4.62 3.07-11.41-1.54-15.17 0 0-41.97-35.24-42.73-36.04-4.46-4.75-6.54-11.25-5.66-17.7s4.62-12.16 10.18-15.54c8.76-5.41 20.25-3.36 27.3 4.14l14.32 15.21.02.02h.01l40.65 43.16c3.88 4.12 10.28 4.54 14.66.97 4.92-4.02 4.87-11.68.51-16.3l-40.15-42.63a21.61 21.61 0 01-5.64-17.7c.88-6.45 4.62-12.15 10.19-15.53 8.76-5.4 20.23-3.35 27.29 4.14l14.34 15.22.02.02 40.65 43.15c3.88 4.12 10.28 4.54 14.66.96 4.92-4.02 4.86-11.68.51-16.3l-40.11-42.57s-.02-.03-.03-.04a21.64 21.64 0 01.91-30.47c4.13-3.97 9.71-6.08 15.43-5.82 5.71.14 11.14 2.57 15.05 6.73l45.98 48.81a43.98 43.98 0 0110.49 19.22l53.52 171.6.96 2.19 21.56 37.35a10.82 10.82 0 007.82 5.28c3.28.47 6.59-.59 8.98-2.88 3.61-3.58 4.31-9.16 1.68-13.52z"></path>
			<path d="M124.35 3.76a290.943 290.943 0 00-70.51 175l-35.41-35.41c-4.22-4.14-10.99-4.1-15.17.08s-4.21 10.95-.08 15.17l53.37 53.36c2.02 2.02 4.76 3.16 7.62 3.16s5.61-1.14 7.62-3.16l53.37-53.36c4.18-4.21 4.17-11.02-.03-15.22-4.2-4.2-11-4.21-15.22-.03l-34.4 34.4c3.58-59 26.47-115.18 65.13-159.88 1.89-2.16 2.84-4.98 2.64-7.84a10.782 10.782 0 00-18.94-6.27z"></path>
			<path d="M75.52 318.26l34.41 34.4a10.78 10.78 0 0015.27.02 10.8 10.8 0 003.16-7.64c0-2.86-1.15-5.61-3.19-7.63L71.8 284.04c-2.02-2.02-4.77-3.16-7.62-3.16s-5.6 1.14-7.62 3.16L3.18 337.42A10.762 10.762 0 000 345.05c0 2.87 1.13 5.62 3.16 7.64a10.8 10.8 0 007.64 3.16c2.87 0 5.61-1.15 7.63-3.18l35.41-35.41a290.943 290.943 0 0070.51 175c1.87 2.18 4.52 3.52 7.38 3.73a10.782 10.782 0 008.93-17.84 269.347 269.347 0 01-65.14-159.88z"></path>
		</svg>
	);
}

function useCheckMobileScreen() {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return width <= 600;
}

const Instructions = () => {
	const isMobile = useCheckMobileScreen();

	let instructionsReturn = {};

	if (isMobile) {
		instructionsReturn = (
			<div className="instructions mobile">
				<div className={"tap mouse"}>
					<TapSVG />
					Pan
				</div>
				<div className={"pinch mouse"}>
					<ZoomSVG /> Zoom / Move
				</div>
			</div>
		);
	} else {
		instructionsReturn = (
			<div className="instructions desktop">
				<div className={"left mouse"}>
					<MouseSVG />
					Pan
				</div>
				<div className={"wheel mouse"}>
					<MouseSVG />
					Zoom
				</div>
				<div className={"right mouse"}>
					<MouseSVG />
					Move
				</div>
			</div>
		);
	}

	return instructionsReturn;
};

export default Instructions;