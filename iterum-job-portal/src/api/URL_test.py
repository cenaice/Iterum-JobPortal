# Apply Link scrape test

from bs4 import BeautifulSoup
import requests

URL_1 = "https://careers.bloomberg.com/job/detail/118309"


try:
    URL_response = requests.get(URL_1, timeout=5)
    URL_response.raise_for_status()

    soup = BeautifulSoup(URL_response.text, 'lxml')
    rows = soup.find_all('tr')

    print('hi')
    print(soup)


except requests.exceptions.HTTPError as errh:
    print(f'HTTP Error: {errh}')
