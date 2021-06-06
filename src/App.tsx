import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterComponent } from './ui-components/Couter';
import { NameInputBox } from './ui-components/NameInputBox';
import { NameInputBoxC } from './ui-components/NameInputBoxC';

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
			</header>
			<main>
				<div className="empty-line"></div>
				<CounterComponent />
				<div className="empty-line"></div>
				<div className="empty-line"></div>
				<NameInputBox />
				<div className="empty-line"></div>
				<div className="empty-line"></div>
				<NameInputBoxC/>
				<div className="empty-line"></div>
				<div className="empty-line"></div>
				<div className="empty-line"></div>
			</main>
			<footer>
				<div className="App-footer">
					2021 fotter inc
				</div>
			</footer>
		</div>
	);
}

export default App;
