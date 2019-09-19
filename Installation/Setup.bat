cls
@echo off
Powershell.exe -ExecutionPolicy RemoteSigned -File MySqlSetup.ps1

echo Trying to install app modules...
cd ..
cd App
npm install

cd ..
cd Installation

echo Modules installert

pause