$i = 1
Get-ChildItem -Filter *.jpeg | Sort-Object Name | ForEach-Object {
    Rename-Item $_.FullName -NewName ("mh" + $i + ".jpeg")
    $i++
}
