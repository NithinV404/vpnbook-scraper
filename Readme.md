# VPNBook Credentials Extraction Script

This Python script is designed for automating the extraction of username and password from the VPNBook site.

This repo uses the tesseract ocr recognition engine to extract the credentials from the VPNBook site.

## Usage
**1.** Clone the repository to your local machine.

**2.** Install the tesseract ocr on the machine 
   ### Windows 
   Download the latest version of tesseract from the official website and install it.
   Add the tesseract executable to the system path or set the path in the script.
   [Windows](https://github.com/UB-Mannheim/tesseract/wiki)
   Download and install the latest exe file

   ### Linux
   Install tesseract using your package manager relative to your distro.

   #### Debian/Ubuntu
 
    sudo apt-get install tesseract-ocr

   #### Fedora

    sudo dnf install tesseract

   #### Arch

    sudo pacman -S tesseract


**3.** Make sure you have installed the necessary dependencies.

    npm install


**4.** Run the file using this command 

    cd src && scrape_with_puppeteer.js
 

## Dependencies
Ensure you have the following dependencies installed in the system:
- Tesseract 

Feel free to modify and use this script for your automation needs.

