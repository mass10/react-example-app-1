@SETLOCAL
@ECHO OFF

REM CALL yarn install
REM CALL yarn run build

CALL cargo fmt
CALL cargo run
