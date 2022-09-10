// import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from './logo.svg';
import './App.css';
import { CounterComponent } from './ui-components/Couter';
import { NameInputBox, NameInputBox2 } from './ui-components/NameInputBox';
import { NameInputBoxC } from './ui-components/NameInputBoxC';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';

/**
 * アプリケーション本体
 *
 * @returns 
 */
function App(): JSX.Element {
	// カウント、およびその setter
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [count, setCount] = React.useState(0);

	const app: JSX.Element = (
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
				<NameInputBox2 name='初期値' />
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
					2021 null inc
				</div>
			</footer>
		</div>
	);
	return app;
}

export default App;
