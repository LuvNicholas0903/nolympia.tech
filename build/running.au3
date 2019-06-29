$open="start "&@ScriptDir&"\xuatde\index.html"
$file_name=@ScriptDir&"\build\offline.bat"
FileDelete($file_name)
Sleep(10)
FileWrite($file_name,$open)
Sleep(20)
run($file_name)