/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderOne() {
	const settingsOne = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const settingsTwo = {
		rtl: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="monke-text-slider-section">
			<div className="monke-text-slider-area1">
				<div className="monke-text-slider1">
					<Slider {...settingsOne}>
						<div className="monke-text-slider-data">
							<div className="monke-text-slider-icon">
								<img src="/images/all-img/v2/star.png" alt="" />
							</div>
							<h3>BEST PLACE FOR BUY, SELL & ACCEPT DIGITAL ASSETS </h3>
						</div>
						<div className="monke-text-slider-data">
							<div className="monke-text-slider-icon">
								<img src="/images/all-img/v2/star.png" alt="" />
							</div>
							<h3>BEST PLACE FOR BUY, SELL & ACCEPT DIGITAL ASSETS </h3>
						</div>
						<div className="monke-text-slider-data">
							<div className="monke-text-slider-icon">
								<img src="/images/all-img/v2/star.png" alt="" />
							</div>
							<h3>BEST PLACE FOR BUY, SELL & ACCEPT DIGITAL ASSETS </h3>
						</div>
					</Slider>
				</div>
			</div>
			<div className="monke-text-slider-area2">
				<div className="monke-text-slider2" dir="rtl">
					<Slider {...settingsTwo}>
						<div className="monke-text-slider-data">
							<div className="monke-text-slider-icon">
								<img src="/images/all-img/v2/star.png" alt="" />
							</div>
							<h3>BEST PLACE FOR BUY, SELL & ACCEPT DIGITAL ASSETS </h3>
						</div>
						<div className="monke-text-slider-data">
							<div className="monke-text-slider-icon">
								<img src="/images/all-img/v2/star.png" alt="" />
							</div>
							<h3>BEST PLACE FOR BUY, SELL & ACCEPT DIGITAL ASSETS </h3>
						</div>
						<div className="monke-text-slider-data">
							<div className="monke-text-slider-icon">
								<img src="/images/all-img/v2/star.png" alt="" />
							</div>
							<h3>BEST PLACE FOR BUY, SELL & ACCEPT DIGITAL ASSETS </h3>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}
