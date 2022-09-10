//!
//! ビルドユーティリティ
//!

/// コマンドを実行します。
///
/// ### Arguments
/// `args` - コマンドライン引数
fn execute_command_sh(args: &[&str]) -> std::result::Result<(), Box<dyn std::error::Error>> {
	// yarn プロセスを実行します。
	let mut command = std::process::Command::new("cmd.exe");
	command.args(&["/C"]);
	command.args(args);
	let mut command = command.args(args).spawn()?;
	let status = command.wait()?;

	// 終了ステータスを確認
	if !status.success() {
		let exit_code = status.code().unwrap();
		println!("[WARN] yarn exited with status: {}", exit_code);

		// バッチを即座に終了させます。
		std::process::exit(exit_code);
	}

	return Ok(());
}

/// Yarn を実行します。
///
/// ### Arguments
/// `args` - Yarn のコマンドライン引数
fn yarn(args: &[&str]) -> std::result::Result<(), Box<dyn std::error::Error>> {
	// yarn プロセスを実行します。
	let command = &[&["yarn.cmd"], args].concat();
	return execute_command_sh(&command);
}

/// エントリーポイント
fn main() {
	let result = yarn(&["audit", "--summary"]);
	if result.is_err() {
		let error = result.err().unwrap();
		println!("[ERROR] {}", error);
		return;
	}
	println!("Ok.");
}
