import {Container} from 'reactstrap'
import './App.css';
import LoginForm from './views/Login'
import Users  from './components/Card';
import SignupForm from './views/Signup';
import Blogs from './views/Blogs'
import BlogDetails from './views/BlogDetails';
import Home from './views/Home';
import { UserDetails } from './views/UserDetails';
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";


function App() {

  return (
    <Container>
      <nav
					style={{
						borderBottom: "solid 1px",
						paddingBottom: "1rem",
					}}
				>
					<Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/blogs">Blogs</Link>
				</nav>
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/users" element={<Users />}>	</Route>
      <Route path="/users/:userId" element={<UserDetails />} />
      
    </Routes>
      
      
     </Container>
    
  );
}

export default App;
