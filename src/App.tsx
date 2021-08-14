import React, { useState } from 'react';
// @typescript-eslint/no-unused-vars
import logo from './logo.svg';
import './App.css';
import { CounterComponent } from './ui-components/Couter';
import { NameInputBox } from './ui-components/NameInputBox';
import { NameInputBoxC } from './ui-components/NameInputBoxC';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function App() {
	// カウント、およびその setter
	// @typescript-eslint/no-unused-vars
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
				<NameInputBoxC />
				<div className="empty-line"></div>
				<div className="empty-line"></div>
				<div className="empty-line"></div>
				<div style={{ textAlign: "center" }}>
					<FormGroup style={{ textAlign: "center" }}>
						<FormControlLabel
							control={<Switch size="small" checked={true} onChange={() => null} />}
							label="Small"
						/>
						<FormControlLabel
							control={<Switch checked={false} onChange={() => null} />}
							label="Normal"
						/>
					</FormGroup>
				</div>
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
