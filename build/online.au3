$open="start https://www.nolympia.tech/xuatde/"
$file_name=@ScriptDir&"\build\online.bat"
FileDelete($file_name)
Sleep(10)
FileWrite($file_name,$open)
Sleep(20)
run($file_name)