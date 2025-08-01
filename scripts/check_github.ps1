function Test-MyGamingSite {
    $url = "https://ingeneur001.github.io/legal-retro-gaming-service"
    
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host "RETRO-GAMING-SITE DIAGNOSE" -ForegroundColor Cyan
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host "URL: $url" -ForegroundColor Yellow
    Write-Host ""
    
    # Detaillierte HTTP-Pruefung
    Write-Host "1. HTTP-STATUS PRUEFUNG:" -ForegroundColor Magenta
    $isOnline = $false
    
    try {
        $response = Invoke-WebRequest -Uri $url -TimeoutSec 30
        
        Write-Host "   STATUS: $($response.StatusCode) - ONLINE!" -ForegroundColor Green
        Write-Host "   Content-Length: $($response.Content.Length) Bytes" -ForegroundColor Green
        Write-Host "   Server: $($response.Headers.Server)" -ForegroundColor Green
        Write-Host "   Last-Modified: $($response.Headers.'Last-Modified')" -ForegroundColor Green
        $isOnline = $true
        
    } catch {
        $statusCode = "Unbekannt"
        if ($_.Exception.Response) {
            $statusCode = $_.Exception.Response.StatusCode.value__
        }
        
        Write-Host "   STATUS: $statusCode - OFFLINE!" -ForegroundColor Red
        Write-Host "   FEHLER: $($_.Exception.Message)" -ForegroundColor Red
        
        Write-Host ""
        Write-Host "2. DIAGNOSE-HILFE:" -ForegroundColor Magenta
        
        switch ($statusCode) {
            404 { 
                Write-Host "   404 = Site existiert nicht" -ForegroundColor Yellow
                Write-Host "   -> GitHub Pages noch nicht aktiviert?" -ForegroundColor Yellow
                Write-Host "   -> Workflow noch nicht durchgelaufen?" -ForegroundColor Yellow
            }
            403 { 
                Write-Host "   403 = Zugriff verweigert" -ForegroundColor Yellow
                Write-Host "   -> Repository ist privat?" -ForegroundColor Yellow
            }
            default { 
                Write-Host "   Netzwerk-Problem oder Server-Fehler" -ForegroundColor Yellow
            }
        }
        
        Write-Host ""
        Write-Host "3. GITHUB-LINKS OEFFNEN:" -ForegroundColor Magenta
        Write-Host "   Oeffne GitHub Pages Settings..." -ForegroundColor Yellow
        Start-Process "https://github.com/ingeneur001/legal-retro-gaming-service/settings/pages"
        
        Start-Sleep 2
        Write-Host "   Oeffne GitHub Actions..." -ForegroundColor Yellow  
        Start-Process "https://github.com/ingeneur001/legal-retro-gaming-service/actions"
    }
    
    # Stabilitaets-Test nur wenn online
    if ($isOnline) {
        Write-Host ""
        Write-Host "2. STABILITAETS-TEST:" -ForegroundColor Magenta
        $successCount = 0
        
        for ($i = 1; $i -le 5; $i++) {
            Write-Host "   Test $i/5: " -NoNewline
            try {
                $testResponse = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 10
                Write-Host "Status $($testResponse.StatusCode) - OK" -ForegroundColor Green
                $successCount++
            } catch {
                Write-Host "FEHLER: $($_.Exception.Message)" -ForegroundColor Red
            }
            if ($i -lt 5) { Start-Sleep 2 }
        }
        
        Write-Host ""
        Write-Host "   STABILITAET: $successCount/5 Tests erfolgreich" -ForegroundColor $(if ($successCount -eq 5) { "Green" } elseif ($successCount -ge 3) { "Yellow" } else { "Red" })
        
        if ($successCount -eq 5) {
            Write-Host "   PERFEKT! Site laeuft stabil!" -ForegroundColor Green
        } elseif ($successCount -ge 3) {
            Write-Host "   WARNUNG: Gelegentliche Probleme erkannt" -ForegroundColor Yellow
        } else {
            Write-Host "   PROBLEM: Site ist instabil!" -ForegroundColor Red
        }
        
        Write-Host ""
        Write-Host "3. BROWSER OEFFNEN:" -ForegroundColor Magenta
        Write-Host "   Oeffne dein Retro-Gaming-Portal..." -ForegroundColor Cyan
        Start-Process $url
    }
    
    Write-Host ""
    Write-Host "4. SCHNELL-BEFEHLE:" -ForegroundColor Magenta
    Write-Host "   Workflow neu triggern:" -ForegroundColor Gray
    Write-Host "   git commit --allow-empty -m 'Force deployment'" -ForegroundColor White
    Write-Host "   git push origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "=" * 60 -ForegroundColor Cyan
}

# Hauptausfuehrung
Test-MyGamingSite

# Optional: Warten und nochmal pruefen
Write-Host ""
$retry = Read-Host "Nochmal in 30 Sekunden pruefen? (j/n)"
if ($retry -eq "j" -or $retry -eq "J") {
    Write-Host "Warte 30 Sekunden..." -ForegroundColor Yellow
    Start-Sleep 30
    Test-MyGamingSite
}