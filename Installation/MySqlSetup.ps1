. "$PSScriptRoot\MySqlFunctions.ps1"

Write-Host -ForegroundColor Green "Starting setup of dnd database..."
Write-Host -ForegroundColor Cyan "Trying to add assembly MySQL.Data.dll..."

## Add required assemblies ##
Add-Type -Path "C:\Program Files (x86)\MySQL\MySQL Connector Net 8.0.17\Assemblies\v4.5.2\MySQL.Data.dll"
Write-Host -ForegroundColor Cyan "Trying to add assembly Renci.SshNet.dll..."
Add-Type -Path 'C:\Program Files (x86)\MySQL\MySQL Connector Net 8.0.17\Assemblies\v4.5.2\Renci.SshNet.dll'

Write-Host -ForegroundColor Green "Trying to connect to MySql..."

## Open the MySql connection
$connection = New-Object MySql.Data.MySqlClient.MySqlConnection
$connection.ConnectionString = getConnectionStringNoDb
$connection.Open()

Write-Host -ForegroundColor DarkYellow "Connected to server"

Write-Host -ForegroundColor Cyan "Creating database..."
## Create the database if it doesnt exist ##
$createDatabaseCmd = New-Object MySql.Data.MySqlClient.MySqlCommand
$createDatabaseCmd.Connection = $connection
$createDatabaseCmd.CommandText = createIfNotExistsCmd
$reader = $createDatabaseCmd.ExecuteReader()
while($reader.Read()) { Write-Host $reader.GetString(0) }
$connection.Close()

Write-Host -ForegroundColor Cyan "Creating tables..."
## Reopen the connection with the database attached
$connection = New-Object MySql.Data.MySqlClient.MySqlConnection
$connection.ConnectionString = getConnectionStringDb
$connection.Open()

## Create the tables ##
$createTablesCmd = New-Object MySql.Data.MySqlClient.MySqlCommand
$createTablesCmd.Connection = $connection
$createTablesCmd.CommandText = createTablesCmd
$reader = $createTablesCmd.ExecuteReader()
while($reader.Read()) { Write-Host $reader.GetString(0) }
$connection.Close()

Write-Host -ForegroundColor Green "Database setup is finished."