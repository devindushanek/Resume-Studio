---
description: InDesign Thesis Book Finalization Workflow
---

# InDesign Thesis Finalization Mission

// turbo-all

This workflow automates the finalization of a thesis book in Adobe InDesign.

## Prerequisites
1. Adobe InDesign must be installed and running
2. The thesis document must be open in InDesign
3. Scripts are located in: `c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\`

## Phase 1: Document Analysis

### Step 1.0: Create Safety Snapshot
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\version_control.jsx"
```

### Step 1.1: Get Document Info
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\document_info.jsx"
```

### Step 1.2: Find Layout Gaps
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\find_gaps.jsx"
```

### Step 1.3: Scan Citations
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\citation_scanner.jsx"
```

## Phase 2: Issue Resolution

### Step 2.0: Create Safety Snapshot
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\version_control.jsx"
```

### Step 2.1: Fix Overset Text
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\fix_overset.jsx"
```

### Step 2.2: Generate Front Matter Structure
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\front_matter_generator.jsx"
```

## Phase 3: Print Preparation

### Step 3.0: Create Safety Snapshot
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\version_control.jsx"
```

### Step 3.1: Run Print Preflight
```powershell
powershell -ExecutionPolicy Bypass -File "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\run_script.ps1" -ScriptPath "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\indesign_tools\core\print_preflight.jsx"
```

## Verification
After each script execution:
1. Check the JSON output for errors/warnings
2. Take a screenshot if visual verification is needed
3. Update the progress report artifact

## Gap Filling Protocol
If a script fails or encounters an unknown API:
1. Search Adobe ExtendScript documentation
2. Update `api_reference.md` with findings
3. Create or modify the script
4. Re-execute and verify
