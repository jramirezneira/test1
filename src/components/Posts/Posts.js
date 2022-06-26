import React from 'react'
import './Posts.css'
import image01 from '../../images/image01.jpeg'
import image02 from '../../images/image02.jpeg'
import iamge03 from '../../images/image03.jpeg'

const Posts = () => {
	return (
		<div className="posts-container">
			<div className="post-container">
				<h1 className="heading">The Ultimate Beginner's Guide to the Flipped Classroom</h1>
				<img className="image" src={image01} alt="post" />
				<p>
					Interested in flipping your classroom but don’t know where to start? Check out our guide and learn
					how you can flip your first class tomorrow!
				</p>
				<div className="info">
					<h4>Written by: EdBlog Staff</h4>
				</div>
			</div>

			<div className="post-container">
				<h1 className="heading">5 Myths About the Flipped Classroom</h1>
				<img className="image" src={image02} alt="post" />
				<p>
					Intrigued about the flipped classroom but worried about starting a new methodology? We’ll dispel the
					5 most common myths about the flipped classroom so you can get the knowledge you need!
				</p>
				<div className="info">
					<h4>Written by: EdBlog Staff</h4>
				</div>
			</div>

			<div className="post-container">
				<h1 className="heading">Edpuzzle: a Core Tool During the Coronavirus Closures</h1>
				<img className="image" src={iamge03} alt="post" />
				<p>
					Discover how to use Edpuzzle for remote learning with these top tips from Adam Hill, an edtech
					expert whose school has been closed due to the coronavirus.
				</p>
				<div className="info">
					<h4>Written by: EdBlog Staff</h4>
				</div>
			</div>
		</div>
	)
}

export default Posts
