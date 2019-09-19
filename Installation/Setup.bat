cls
@echo off
Powershell.exe -ExecutionPolicy RemoteSigned -File MySqlSetup.ps1

cd ..
cd App

echo Trying to install app modules...
npm install && cd .. && cd Installation && echo Modules Installed && pause
