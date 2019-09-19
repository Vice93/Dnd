. "$PSScriptRoot\MySqlCredentials.ps1"

function getConnectionStringNoDb{
    $creds = getCredentials

    return "server=$($creds.server);user id=$($creds.user);password=$($creds.password);pooling=false;"
}


function getConnectionStringDb{
    $creds = getCredentials

    return "server=$($creds.server);user id=$($creds.user);password=$($creds.password);database=$($creds.database);pooling=false;"
}

function createIfNotExistsCmd
{
    $creds = getCredentials

    return "CREATE DATABASE IF NOT EXISTS $($creds.database)"
}


function createTablesCmd
{
    $creds = getCredentials

return @"
CREATE TABLE IF NOT EXISTS $($creds.database).`Users` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  `CreatedDate` DATETIME NOT NULL,
  `UpdatedDate` DATETIME NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
"@
}