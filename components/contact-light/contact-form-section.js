/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function ContactFormSection() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className="monke--contact-section white-version">
			<div className="container">
				<div className="monke--contact-column">
					<div className="row">
						<div className="col-lg-5">
							<div className="monke--contact-info">
								<h4>Reach out to us at:</h4>
								<ul>
									<li>
										<Link href={"#"}>
											<span>
												<img src="/images/svg2/phone2.svg" alt="" />
											</span>
											+008-245-5667
										</Link>
									</li>
									<li>
										<Link href={"#"}>
											<span>
												<img src="/images/svg2/mail2.svg" alt="" />
											</span>
											mail@example.com
										</Link>
									</li>
									<li>
										<Link href={"#"}>
											<span>
												<img src="/images/svg2/map2.svg" alt="" />
											</span>
											389 Ranchview, California 62639
										</Link>
									</li>
								</ul>
							</div>
							<div className="monke--contact-info monke--contact-info2">
								<h4>Opening hours:</h4>
								<ul>
									<li>
										<Link href={"#"}>
											<span>
												<img src="/images/svg2/clock.svg" alt="" />
											</span>
											Monday to Thursday: 7:00 – 15:00 Friday to Saturday: 7:00 – 15:00 Sunday:
											CLOSED
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="monke--contact-form wow fadeInUpX">
								<h3>Leave a Reply:</h3>
								<p>Your email address will not be published. Required fields are marked*</p>
								<form action="#">
									<div className="monke--comment-field">
										<input
											type="text"
											placeholder="Your Name*"
											{...register("name", { required: true })}
											aria-invalid={errors.name ? "true" : "false"}
										/>
										{errors.name?.type === "required" && (
											<p role="alert" className="error">
												First name is required
											</p>
										)}
									</div>
									<div className="monke--comment-field">
										<input
											type="email"
											placeholder="Your Email*"
											{...register("email", { required: true })}
											aria-invalid={errors.email ? "true" : "false"}
										/>
										{errors.email?.type === "required" && (
											<p role="alert" className="error">
												Email is required
											</p>
										)}
									</div>
									<div className="monke--comment-field">
										<textarea
											name="textarea"
											placeholder="Write your comment*"
											{...register("comment")}
										></textarea>
									</div>
									<button id="monke--form-submit-btn" type="submit">
										Post Comment
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
