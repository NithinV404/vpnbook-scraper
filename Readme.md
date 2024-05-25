# VPNBook Credentials Extraction Script

This Python script is designed for automating the extraction of username and password from the VPNBook site.

This repo uses the tesseract ocr recognition engine to extract the credentials from the VPNBook site.

## Usage
1. Clone the repository to your local machine.
2. Install the tesseract ocr on the machine 
   ## Windows 
   Download the latest version of tesseract from the official website and install it.
   Add the tesseract executable to the system path or set the path in the script.
   [Windows](https://github.com/UB-Mannheim/tesseract/wiki)
   Download and install the latest exe file

   ## Linux
   Install tesseract using your package manager.
    ```
    sudo apt-get install tesseract
    ```

2. Make sure you have installed the necessary dependencies listed in `requirements.txt`.
    ```
    pip install -r requirements.txt
    ```
3. Update the script with any necessary configurations.
4. Run the script to extract the VPNBook credentials for automation.
5. The username and password is stored into openvpn_credentials.txt

## Dependencies
Ensure you have the following dependencies installed:
- pytesseract
- Pillow
- requests
- numpy
- beautifulsoup4

Feel free to modify and use this script for your automation needs.

