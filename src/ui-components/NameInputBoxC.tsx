import React from 'react'

/**
 * class component.
 * 
 * 従来のクラス型コンポーネント。
 * `props` や `this.state`、`this.setState` などの操作がキモとなる。
 */
export class NameInputBoxC extends React.Component {

	/**
	 * コンストラクター
	 *
	 * @param props 既定の状態管理プロパティーです。
	 */
	public constructor(props: any) {
		super(props)
		this.state = {
			name: "Jimi"
		};
		// 従来のメソッド表記ではなく、アロー関数として宣言しておけば、`this` に悩むことがない
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	/**
	 * コンストラクターで `this` に `bind` しておかなければならないことに注意。
	 * 
	 * アロー関数として定義しておけば、この「undefined this」に悩むことはない。
	 * 
	 * @param e 
	 */
	private handleNameChange(e: any): void {
		console.log(`${new Date()} [TRACE] new value is [${e.target.value}]`);
		this.setState({ name: e.target.value });
	}

	/**
	 * レンダリングが必要な瞬間に毎回呼び出されます。
	 *
	 * @returns `JSX.Element`
	 */
	render(): /*React.ReactElement*/ JSX.Element {
		// @ts-ignore
		const name = this.state.name

		// コンポーネントを返します。
		const styles = { fontSize: "20px", padding: "8px" };
		return (
			<section>
				<input name="name1" style={styles} value={name} onChange={this.handleNameChange} />
			</section>
		)
	}
}
