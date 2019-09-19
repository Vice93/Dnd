cls
@echo off
Powershell.exe -ExecutionPolicy RemoteSigned -File MySqlSetup.ps1

echo Checking if NodeJs is installed
where node.exe >nul 2>&1 && echo NodeJs is installed! || echo NodeJs is not installed. Exiting... && pause && exit

cd ..
cd App

echo Trying to install app modules...
npm install && cd .. && cd Installation && echo Modules Installed && pause
