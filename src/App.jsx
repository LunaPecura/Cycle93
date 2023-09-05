
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';

// Pages
import AuthPage from './pages/AuthPage/AuthPage';
import ForumPage from './pages/ForumPage/ForumPage';
import CurriculumPage from './pages/CurriculumPage/CurriculumPage';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import AllMembersPage from './pages/AllMembersPage/AllMembersPage';
import MemorabiliaPage from './pages/MemorabiliaPage/MemorabiliaPage';

// Components
import NavBar from './components/NavBar/NavBar';

// CSS
import './App.css';

function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className='App'>

			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Routes>
						{/* <Route path='/orders/new' element={<NewOrderPage />} />
						<Route path='/orders' element={<OrderHistoryPage />} /> */}
						<Route path='/forum' element={<ForumPage user={user} />} />
						<Route path='/curriculum' element={<CurriculumPage />} />
						<Route path='/resources' element={<ResourcesPage />} />
						<Route path='/members' element={<AllMembersPage />} />
						<Route path='/memorabilia' element={<MemorabiliaPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}

export default App;
