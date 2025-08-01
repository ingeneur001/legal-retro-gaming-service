# RETRO GAMING SERVER - PROGRESS TRACKER
# Automatische Dokumentation des Entwicklungsfortschritts

param(
    [string]$Action = "status",
    [string]$Phase = "",
    [string]$Task = "",
    [int]$Hours = 0,
    [string]$Notes = ""
)

# Konfiguration
$ProgressFile = ".\docs\DEVELOPMENT_LOG.json"
$ReportFile = ".\docs\WEEKLY_REPORT.md"

# Stelle sicher dass docs Ordner existiert
if (!(Test-Path ".\docs")) {
    New-Item -ItemType Directory -Path ".\docs" -Force
}

# Initialisiere Progress-Datei wenn nicht vorhanden
if (!(Test-Path $ProgressFile)) {
    $InitialData = @{
        project_start = Get-Date -Format "yyyy-MM-dd"
        total_hours = 0
        current_phase = "Phase 1: Backend Foundation"
        phases = @{
            "Phase 1: Backend Foundation" = @{
                planned_hours = 90
                actual_hours = 0
                start_date = $null
                end_date = $null
                tasks = @()
                status = "not_started"
            }
            "Phase 2: Game Engine Development" = @{
                planned_hours = 200
                actual_hours = 0
                start_date = $null
                end_date = $null
                tasks = @()
                status = "not_started"
            }
            "Phase 3: Multiplayer & Payments" = @{
                planned_hours = 130
                actual_hours = 0
                start_date = $null
                end_date = $null
                tasks = @()
                status = "not_started"
            }
            "Phase 4: Production Launch" = @{
                planned_hours = 55
                actual_hours = 0
                start_date = $null
                end_date = $null
                tasks = @()
                status = "not_started"
            }
        }
        daily_logs = @()
    }
    $InitialData | ConvertTo-Json -Depth 10 | Set-Content $ProgressFile -Encoding UTF8
    Write-Host "Progress Tracker initialisiert!" -ForegroundColor Green
}

# Lade aktuelle Daten
$ProgressData = Get-Content $ProgressFile -Encoding UTF8 | ConvertFrom-Json

function Show-Status {
    Write-Host "=" * 70 -ForegroundColor Cyan
    Write-Host "RETRO GAMING SERVER - ENTWICKLUNGSFORTSCHRITT" -ForegroundColor Cyan
    Write-Host "=" * 70 -ForegroundColor Cyan
    
    $totalPlanned = ($ProgressData.phases.PSObject.Properties | ForEach-Object { $_.Value.planned_hours } | Measure-Object -Sum).Sum
    $totalActual = ($ProgressData.phases.PSObject.Properties | ForEach-Object { $_.Value.actual_hours } | Measure-Object -Sum).Sum
    $overallProgress = if ($totalPlanned -gt 0) { [math]::Round(($totalActual / $totalPlanned) * 100, 1) } else { 0 }
    
    Write-Host ""
    Write-Host "GESAMT-UEBERBLICK:" -ForegroundColor Magenta
    Write-Host "   Geplante Stunden: $totalPlanned" -ForegroundColor White
    Write-Host "   Geleistete Stunden: $totalActual" -ForegroundColor White
    Write-Host "   Fortschritt: $overallProgress%" -ForegroundColor $(if($overallProgress -gt 75){"Green"}elseif($overallProgress -gt 50){"Yellow"}else{"Red"})
    Write-Host "   Aktuelle Phase: $($ProgressData.current_phase)" -ForegroundColor Cyan
    
    Write-Host ""
    Write-Host "PHASEN-DETAILS:" -ForegroundColor Magenta
    
    foreach ($phase in $ProgressData.phases.PSObject.Properties) {
        $phaseData = $phase.Value
        $phaseProgress = if($phaseData.planned_hours -gt 0) { 
            [math]::Round(($phaseData.actual_hours / $phaseData.planned_hours) * 100, 1) 
        } else { 0 }
        
        $statusColor = switch($phaseData.status) {
            "completed" { "Green" }
            "in_progress" { "Yellow" }
            "not_started" { "Gray" }
            default { "White" }
        }
        
        Write-Host "   $($phase.Name):" -ForegroundColor White
        Write-Host "     Status: $($phaseData.status.ToUpper())" -ForegroundColor $statusColor
        Write-Host "     Fortschritt: $phaseProgress% ($($phaseData.actual_hours)/$($phaseData.planned_hours) Stunden)" -ForegroundColor White
        Write-Host "     Tasks: $($phaseData.tasks.Count)" -ForegroundColor White
        Write-Host ""
    }
    
    # Letzte 5 Aktivitaeten
    if ($ProgressData.daily_logs.Count -gt 0) {
        Write-Host "LETZTE AKTIVITAETEN:" -ForegroundColor Magenta
        $ProgressData.daily_logs | Select-Object -Last 5 | ForEach-Object {
            Write-Host "   $($_.date) - $($_.task) ($($_.hours) Stunden)" -ForegroundColor Gray
        }
    }
    
    Write-Host "=" * 70 -ForegroundColor Cyan
}

function Add-Progress {
    param($Phase, $Task, $Hours, $Notes)
    
    # Aktualisiere Phase wenn angegeben
    if ($Phase -and $ProgressData.phases.PSObject.Properties.Name -contains $Phase) {
        $ProgressData.current_phase = $Phase
        $ProgressData.phases.$Phase.actual_hours += $Hours
        
        # Setze Phase auf in_progress wenn erste Stunden geloggt werden
        if ($ProgressData.phases.$Phase.status -eq "not_started") {
            $ProgressData.phases.$Phase.status = "in_progress"
            $ProgressData.phases.$Phase.start_date = Get-Date -Format "yyyy-MM-dd"
        }
        
        # Fuege Task hinzu
        $newTask = @{
            date = Get-Date -Format "yyyy-MM-dd"
            task = $Task
            hours = $Hours
            notes = $Notes
        }
        $ProgressData.phases.$Phase.tasks += $newTask
    }
    
    # Fuege zum Daily Log hinzu
    $dailyEntry = @{
        date = Get-Date -Format "yyyy-MM-dd HH:mm"
        phase = $Phase
        task = $Task
        hours = $Hours
        notes = $Notes
    }
    $ProgressData.daily_logs += $dailyEntry
    
    # Aktualisiere Gesamtstunden
    $ProgressData.total_hours += $Hours
    
    # Speichere Daten
    $ProgressData | ConvertTo-Json -Depth 10 | Set-Content $ProgressFile -Encoding UTF8
    
    Write-Host "Fortschritt hinzugefuegt: $Task ($Hours Stunden)" -ForegroundColor Green
}

function Generate-Report {
    $reportContent = @"
# WOECHENTLICHER FORTSCHRITTSBERICHT
**Generiert am:** $(Get-Date -Format "dd.MM.yyyy HH:mm")

## Projekt-Uebersicht
- **Projekt:** Legal Retro Gaming Server  
- **Aktuelle Phase:** $($ProgressData.current_phase)
- **Gesamt-Stunden:** $($ProgressData.total_hours)

## Phasen-Fortschritt
"@

    foreach ($phase in $ProgressData.phases.PSObject.Properties) {
        $phaseData = $phase.Value
        $phaseProgress = if($phaseData.planned_hours -gt 0) { 
            [math]::Round(($phaseData.actual_hours / $phaseData.planned_hours) * 100, 1) 
        } else { 0 }
        
        $reportContent += @"

### $($phase.Name)
- **Status:** $($phaseData.status)
- **Fortschritt:** $phaseProgress% ($($phaseData.actual_hours)/$($phaseData.planned_hours) Stunden)
- **Tasks abgeschlossen:** $($phaseData.tasks.Count)
"@
    }

    $reportContent += @"

## Letzte Aktivitaeten (7 Tage)
"@

    $lastWeek = (Get-Date).AddDays(-7)
    $recentLogs = $ProgressData.daily_logs | Where-Object { 
        try {
            [DateTime]::ParseExact($_.date, "yyyy-MM-dd HH:mm", $null) -gt $lastWeek 
        } catch {
            $false
        }
    }
    
    if ($recentLogs) {
        foreach ($log in $recentLogs) {
            $reportContent += "`n- **$($log.date):** $($log.task) ($($log.hours) Stunden)"
        }
    } else {
        $reportContent += "`n*Keine Aktivitaeten in den letzten 7 Tagen*"
    }

    $reportContent += @"

## Naechste Schritte
- [ ] Naechster Meilenstein definieren
- [ ] Zeitplan ueberpruefen  
- [ ] Code Review durchfuehren

---
*Automatisch generiert von progress_tracker.ps1*
"@

    $reportContent | Set-Content $ReportFile -Encoding UTF8
    Write-Host "Bericht generiert: $ReportFile" -ForegroundColor Green
}

# Hauptlogik
switch ($Action.ToLower()) {
    "status" { Show-Status }
    "add" { 
        if (!$Phase -or !$Task -or $Hours -eq 0) {
            Write-Host "Fehler: Phase, Task und Hours sind erforderlich!" -ForegroundColor Red
            Write-Host "Beispiel: .\progress_tracker.ps1 -Action add -Phase 'Phase 1: Backend Foundation' -Task 'Database Setup' -Hours 4 -Notes 'PostgreSQL installation completed'"
        } else {
            Add-Progress -Phase $Phase -Task $Task -Hours $Hours -Notes $Notes
        }
    }
    "report" { Generate-Report }
    "help" {
        Write-Host "PROGRESS TRACKER - VERWENDUNG:" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Status anzeigen:" -ForegroundColor Yellow
        Write-Host "  .\progress_tracker.ps1 -Action status"
        Write-Host ""
        Write-Host "Fortschritt hinzufuegen:" -ForegroundColor Yellow  
        Write-Host "  .\progress_tracker.ps1 -Action add -Phase 'Phase 1: Backend Foundation' -Task 'Database Setup' -Hours 4 -Notes 'Optional notes'"
        Write-Host ""
        Write-Host "Bericht generieren:" -ForegroundColor Yellow
        Write-Host "  .\progress_tracker.ps1 -Action report"
        Write-Host ""
        Write-Host "Verfuegbare Phasen:" -ForegroundColor White
        Write-Host "  - Phase 1: Backend Foundation"
        Write-Host "  - Phase 2: Game Engine Development" 
        Write-Host "  - Phase 3: Multiplayer & Payments"
        Write-Host "  - Phase 4: Production Launch"
    }
    default { 
        Write-Host "Unbekannte Aktion: $Action" -ForegroundColor Red
        Write-Host "Verwende -Action help fuer Hilfe" -ForegroundColor Yellow
    }
}