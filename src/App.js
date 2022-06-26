import logo from './images/logo.png'
import './App.css'
import Posts from './components/Posts/Posts'

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				EdBlog
			</header>
			<Posts />
		</div>
	)
}

export default App
