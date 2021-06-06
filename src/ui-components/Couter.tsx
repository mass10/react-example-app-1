import React, { useState } from 'react';


export function CounterComponent(): JSX.Element {

	// ステートを使用する初期化
	// ・myCount1 に変更が加えられると、このコンポーネントが再び呼び出される！
	const [myCount1, setMyCount1] = useState(0);

	console.log("%s [TRACE] <CounterComponent()> CALLED.", new Date());

	// 変更
	const countSetter = (x: number): void => {
		console.log(`${new Date()} [TRACE] NEW VALUE is ${x}`);
		// react から提供された setter
		setMyCount1(x);
	}

	return (
		<div>
			<p style={{fontSize: "20px", padding: "10px"}}>You clicked {myCount1} times</p>
			<button onClick={() => countSetter(myCount1 + 1)} style={{fontSize: "20px", padding: "10px"}}>
				Click me
			</button>
		</div>
	);
}
