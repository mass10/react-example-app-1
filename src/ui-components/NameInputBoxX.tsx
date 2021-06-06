import React from 'react'

/**
 * state っぽいことが書けるか？
 * 
 * 結果: コントロールが全然反応しない
 */
const privateStateStash = {
	name: "Jimi"
}

export const NameInputBox = (): JSX.Element => {

	// privateStateStash.name = "Jimi";

	console.log(`${new Date()} [TRACE] <NameInputBox()> called. name is [${privateStateStash.name}]`);

	const onChangeTextValue = (e: any) => {
		console.log(`${new Date()} [TRACE] new value is [${e.target.value}]`);
		privateStateStash.name = e.target.value;
	}

	// ただの変数では Reactive な挙動にならない。
	return (
		<section>
			<input name="name1" style={{fontSize: "20px", padding: "8px"}} value={privateStateStash.name} onChange={onChangeTextValue} />
		</section>
	)
}
