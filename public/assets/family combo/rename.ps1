$i = 1
Get-ChildItem -Filter *.jpeg | ForEach-Object {
    Rename-Item $_.FullName -NewName ("fc" + $i + ".jpeg")
    $i++
}
