import React from "react";

const Card = ({ id, name, email }) => {
	return (
		<div className=" tc bg-light-blue dib br3 ma3 shadow-5 grow bw2">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
			<div>
				<h3>{name} </h3>
				<p>{email} </p>
			</div>
		</div>
	);
};
export default Card;
