import React, { useState } from 'react'

export const NameInputBox = (): JSX.Element => {
	const [name, setName] = useState("Jimi");
	const handleNameChange = (e: any) => {
		console.log(`${new Date()} [TRACE] new value is [${e.target.value}]`);
		setName(e.target.value);
	}
	return (
		<section>
			<input name="name1" style={{fontSize: "20px", padding: "8px"}} value={name} onChange={handleNameChange} />
		</section>
	)
}
