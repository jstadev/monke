import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
	return (
		<div
			className="monke--hero-section monke--hero-section2"
			style={{ backgroundImage: "url(/images/all-img/v4/hero-bg.png)" }}
		>
			<div className="container">
				<div className="monke--hero-content monke--hero-content2">
					<h1 className="wow fadeInUpX" data-wow-delay="0s">
						Discover digital art, collect & sell NFT
					</h1>
					<p className="wow fadeInUpX" data-wow-delay=".10s">
						Nexto is the largest NFT marketplace. There are enough digital artworks available online that
						make NFTs easier and more efficient for you.
					</p>
					<div className="monke--btn-wrap monke--hero-btn wow fadeInUpX" data-wow-delay=".20s">
						<Link href={"#"} legacyBehavior>
							<a className="monke--btn bg-orange">View All Collections</a>
						</Link>
					</div>
					<div className="monke--content-star">
						<img src="/images/all-img/v4/star-black-2.png" alt="" />
					</div>
					<div className="monke--hero-mocup mocup1">
						<img src="/images/all-img/v4/hero-thumb1.png" alt="" />
					</div>
					<div className="monke--hero-mocup mocup2">
						<img src="/images/all-img/v4/hero-thumb2.png" alt="" />
					</div>
					<div className="monke--hero-mocup mocup3">
						<img src="/images/all-img/v4/hero-thumb3.png" alt="" />
					</div>
					<div className="monke--hero-mocup mocup4">
						<img src="/images/all-img/v4/hero-thumb4.png" alt="" />
					</div>
				</div>
			</div>
			<div className="monke--hero-shpae1">
				<img src="/images/shape2/hero-v2-shape1.png" alt="" />
			</div>
			<div className="monke--hero-shpae2">
				<img src="/images/shape2/hero-v2-shape2.png" alt="" />
			</div>
		</div>
	);
}
