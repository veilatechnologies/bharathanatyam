$i = 1
Get-ChildItem -Filter *.jpeg | ForEach-Object {
    Rename-Item $_.FullName -NewName ("bd" + $i + ".jpeg")
    $i++
}
