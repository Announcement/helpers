@echo off

for /f %i in ('FORFILES /P src') do @echo %~i
