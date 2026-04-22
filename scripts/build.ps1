# Lovrella Content — Build Script
# Runs from G:\My Drive\Vibe Coding\Lovrella\lovrella-content
# Builds locally on C: (Google Drive can't run npm reliably), copies out/ back to G:

$src  = "G:\My Drive\Vibe Coding\Lovrella\lovrella-content"
$dest = "C:\lovrella-build"

Write-Host "`n[1/4] Syncing source to $dest ..." -ForegroundColor Cyan
robocopy $src $dest /E /XD node_modules .next out .git /XF "*.lnk" /NFL /NDL /NJH /NJS | Out-Null

Write-Host "[2/4] Installing dependencies ..." -ForegroundColor Cyan
Set-Location $dest
npm install --silent
if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed" -ForegroundColor Red; exit 1 }

Write-Host "[3/4] Building ..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed" -ForegroundColor Red; exit 1 }

Write-Host "[4/4] Copying out/ back to G: ..." -ForegroundColor Cyan
robocopy "$dest\out" "$src\out" /E /NFL /NDL /NJH /NJS | Out-Null

Write-Host "`nDone. out/ is ready for Cloudflare Pages deploy." -ForegroundColor Green
Set-Location $src
