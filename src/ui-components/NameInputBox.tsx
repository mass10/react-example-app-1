import React, { useState } from 'react'

/**
 * 名前入力ボックスコンポーネント
 *
 * @returns 名前入力ボックスコンポーネント
 */
export const NameInputBox = (): JSX.Element => {

	const [name, setName] = useState("Jimi");

	const handleNameChange = (e: any) => {
		console.log(`${new Date()} [TRACE] new value is [${e.target.value}]`);
		setName(e.target.value);
	}

	return (
		<section>
			<input name="name1" style={{ fontSize: "20px", padding: "8px" }} value={name} onChange={handleNameChange} />
		</section>
	)
}

export const NameInputBox2: React.FC<{ args: string }> = ({ args: string }) => {

	const [name, setName] = useState("Jimi");

	const handleNameChange = (e: any) => {
		console.log(`${new Date()} [TRACE] new value is [${e.target.value}]`);
		setName(e.target.value);
	}

	return (
		<section>
			<input name="name1" style={{ fontSize: "20px", padding: "8px" }} value={name} onChange={handleNameChange} />
		</section>
	)
}
