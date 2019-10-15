# WSL 2 

At the minute, you'll need to be on the "Fast Ring" of the insider preview to ensure that you get updates. Please be careful with this as it may not necessarily be stable and should be used sparingly on your work machine. That said, I use this on my work machine.

## Enable Insider

Enable the insider by going to Settings > Windows Insider Program and enabling the fast ring. This will require a reboot and once this has done you should be able to download the latest insider build.

## Setup Your Terminal

1. I recommend either [Hyper]() or [Windows Terminal]() as a solid way of working with both your Windows install and WSL.

## Setup WSL2

1. Run a command prompt / powershell as administrator
2. `Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform`
3. Reboot. Visit the store, download the latest version of Ubuntu. Open it and follow the prompts if you haven't done this already. This will take you through setting up a default user and password.
4. Run `wsl --list --verbose` to check the installed distros and versions.
5. Run `wsl --set-version <DistroName> 2` this will start the conversion of the distro into 2 in the background.

## Setup VS Code

1. Download or Open VS Code
2. Install the Remote - WSL extensions
3. Hit F1, Type `Remote-WSL: New Window` to open a new window with remote connection to WSL or in your terminal `cd` to the correct folder and run `code .`

## Setup Your Ubuntu Environment

```
sudo apt-get update

# Curl
sudo apt-get install curl

# Composer
__ INSTALL__

# ZSH
sudo apt-get install zsh -y
__ add zsh install command here __

# PHP
sudo apt-get install php php-{curl,mysql} -y

# MySQL
sudo apt-get install mysql-server
sudo service mysql start
sudo mysql_secure_installation

# Yarn
__ add yarn notes here __
sudo apt-get install yarn

# Git
sudo apt-get install git
git config --global user.name "<YOUR NAME>"
git config --global user.email "<YOUR EMAIL>"

# Valet

# Editing hosts
sudo nano /mnt/c/Windows/System32/etc/hosts
```





