$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = if ($args.Count -gt 0) { [int]$args[0] } else { 8765 }
$url = "http://127.0.0.1:$port/questionnaires/SmartUrbanity/index.html"

Set-Location $root

Write-Host "SmartUrbanity local preview"
Write-Host "Serving: $root"
Write-Host "Open:    $url"
Write-Host "Press Ctrl+C to stop."

python -m http.server $port --bind 127.0.0.1
