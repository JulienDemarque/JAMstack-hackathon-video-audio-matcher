import React from 'react';
import PropTypes from 'prop-types';
// react-static
import { Link } from 'react-static';
// @material-ui/core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// -- Button
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';
// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Styles
import styles from '../styles/stylesHeader';

class PrimarySearchAppBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileMoreAnchorEl: null,
		};
		this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
		this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
	}

	handleMobileMenuOpen(event) {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	}

	handleMobileMenuClose() {
		this.setState({ mobileMoreAnchorEl: null });
	}

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		// Links
		const HomeLink = props => <Link to="/" {...props} />;
		const TestLink = props => <Link to="/test" {...props} />;
		const AccountLink = props => <Link to="/account" {...props} />;

		/* Menu when you click more icon */
		const renderMobileMenu = (
			<Popper
				open={isMobileMenuOpen}
				anchorEl={mobileMoreAnchorEl}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						id="menu-list-grow"
						style={{
							transformOrigin:
								placement === 'bottom' ? 'center top' : 'center bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={this.handleMobileMenuClose}>
								<MenuList>
									<MenuItem
										component={HomeLink}
										onClick={this.handleMobileMenuClose}
									>
										Profile
									</MenuItem>
									<MenuItem
										component={TestLink}
										onClick={this.handleMobileMenuClose}
									>
										My account
									</MenuItem>
									<MenuItem
										component={AccountLink}
										onClick={this.handleMobileMenuClose}
									>
										Logout
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		);

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography
							className={classes.title}
							variant="h6"
							color="inherit"
							noWrap
						>
							Video Audio Match
						</Typography>

						<div className={classes.grow} />
						{/* Navbar Icons on Desktop */}
						<div className={classes.sectionDesktop}>
							<Button component={HomeLink} color="inherit">
								<MailIcon />
								<p>Home</p>
							</Button>
							<Button component={TestLink} color="inherit">
								<NotificationsIcon />
								<p>Test</p>
							</Button>
							<Button component={AccountLink} color="inherit">
								<AccountCircle />
								<p>Account</p>
							</Button>
						</div>
						{/* Menu Icon for Mobile */}
						<div className={classes.sectionMobile}>
							<IconButton
								aria-haspopup="true"
								onClick={this.handleMobileMenuOpen}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
			</div>
		);
	}
}

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
