import React from 'react'
import {
	instagram,
	github,
	Facebook,
	telegram,
	Logo,
	discord,
	bitbucket,
} from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
	return (
		<div className='icon-wrapper'>
			<img className='icon-medsos' src={img} alt='icon' />
		</div>
	)
}

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div>
					<img className='logo' src={Logo} alt='Logo' />
				</div>
				<div className='social-wrapper'>
					<Icon img={Facebook} />
					<Icon img={instagram} />
					<Icon img={telegram} />
					<Icon img={discord} />
					<Icon img={github} />
					<Icon img={bitbucket} />
				</div>
			</div>
			<div className='copyright'>
				<p>Copyright</p>
			</div>
		</div>
	)
}

export default Footer
