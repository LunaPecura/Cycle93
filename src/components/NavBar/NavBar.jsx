import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({ user, setUser }) {

	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

	return (
		<nav className='NavBar'>
			<span>
				{/* <Link to='/orders'>Order History</Link> &nbsp; | &nbsp;
				<Link to='/orders/new'>New Order</Link> &nbsp;&nbsp; */}
				<Link to='/forum'>Forum</Link> &nbsp; | &nbsp;
				<Link to='/curriculum'>Curriculum</Link> &nbsp; | &nbsp;
				<Link to='/resources'>Resources</Link> &nbsp; | &nbsp;
				<Link to='/members'>Members</Link> &nbsp; | &nbsp;
				<Link to='/memorabilia'>Memorabilia</Link>
			</span>
			<span>
				<span>Welcome, {user.name}</span>&nbsp; | &nbsp;
				<Link to='' onClick={handleLogOut}>Log Out</Link>
			</span>
		</nav>
	);
}
