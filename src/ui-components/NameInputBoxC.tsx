import React from 'react'

export class NameInputBoxC extends React.Component {

	constructor(props: any) {
		super(props)
		this.state = {
			name: "Jimi"
		};
	}

	private readonly handleNameChange = (e: any) => {
		console.log(`${new Date()} [TRACE] new value is [${e.target.value}]`);
		this.setState({ name: e.target.value });
	}

	render() {
		// @ts-ignore
		return (<section><input name="name1" style={{ fontSize: "20px", padding: "8px" }} value={this.state.name} onChange={this.handleNameChange} /></section>)
	}
}
