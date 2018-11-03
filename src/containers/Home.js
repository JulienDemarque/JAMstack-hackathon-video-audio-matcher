import React from 'react';
import { withSiteData } from 'react-static';
import { Link } from 'react-static';
// @material-ui/core
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container>
					<Grid item>
						<Paper className={classes.paper}>
							<Typography variant="h2">
								<h2>Welcome to Audio Video Matcher</h2>
							</Typography>
							<p>
								This website allows you to quickly found suitable music for your
								video. It is using image recognition on your video to determine
								a best fitting musical genre to it. You can then play the song
								of your choice along your video. Ready to get started? Follow
								the link: <Link to="/test">Test</Link>
							</p>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const StyledHome = withStyles(styles)(Home);
export default withSiteData(StyledHome);
