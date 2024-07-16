import { Typography, Link } from '@mui/material'

const Footer = () => {
	return <footer className='footer'>
		<div className='footerText'>
			<Typography
				varient='body2'
				color='textSecondary'
				margin='auto'
				width='fit-content'
			>
				{"© "}
				<Link color='inherit' href='https://koausa.org/site/'>
					{"KOA USA"}
				</Link>	{" "}
				{new Date().getFullYear()}
			</Typography>
			{/* <Typography varient='body1' color='textSecondary' align='center'>
				{"By "}
				<Link fontWeight='600' color='inherit' underline='none'
					href='https://github.com/SeanTroy'>plehtika</Link>
				{" and "}
				<Link fontWeight='600' color='inherit' underline='none'
					href='https://github.com/erikpeik'>erikpeik</Link>
			</Typography> */}
		</div>
	</footer>
}

export default Footer
