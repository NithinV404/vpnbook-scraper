import requests
import numpy as np
import os
import tempfile
from PIL import Image
import pytesseract
from bs4 import BeautifulSoup

pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Nithin\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'
url = "https://www.vpnbook.com/"

def download_image(url,zoom_factor=2):
    response = requests.get(url)
    temp_dir = tempfile.gettempdir()
    image_path = os.path.join(temp_dir, "temp_image.jpg")
    with open(image_path, 'wb') as file:
        file.write(response.content)
    return image_path

def remove_file(file_path):
    os.remove(file_path)

def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
element_with_id_openvpn = soup.findChildren('li',id="openvpn")
username = element_with_id_openvpn[0].find_all('strong')[-2]
password = element_with_id_openvpn[0].find_all('strong')[-1]

password_image_url = url+password.find('img')['src'].replace(" ","%20")
image_path = download_image(password_image_url)
password_text = extract_text_from_image(image_path)

credential_file_path = "openvpn_credentials.txt"

with open(credential_file_path, 'w') as file:
    file.write(f"Username: {username.text.split(':')[1].strip()}\n")
    file.write(f"Password: {password_text}")

print(f"Credentials saved to {credential_file_path}")


