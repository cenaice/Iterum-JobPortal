from bs4 import BeautifulSoup
import requests


# Getting Response from our URLs
URL_ReaV = "http://www.github.com/ReaVNaiL/New-Grad-2024"


# try and catch response
try:
    reaV_response = requests.get(URL_ReaV, timeout=5)
    reaV_response.raise_for_status()

    soup = BeautifulSoup(reaV_response.text, 'lxml')
    rows = soup.find_all('tr')

    jobs = []

    for row in rows:
        cells = row.find_all('td')

        
        
        # Check if the number of cells is what you expect, for example, 5 cells in a row
        if len(cells) == 5:
            
            role_text = cells[2].get_text(strip=True)

            if '🔒' in role_text:
                continue
            job_data = {
                'company_name': cells[0].get_text(strip=True),
                'location': cells[1].get_text(strip=True),
                'role': role_text,
                'apply_link': cells[2].find('a')['href'] if cells[2].find('a') else None,
                'date_posted': cells[4].get_text(strip=True)
            }
            jobs.append(job_data)

    for job in jobs:
        print(job)

    

except requests.exceptions.HTTPError as errh:
    print(f'HTTP Error: {errh}')
except requests.exceptions.ConnectionError as errc:
    print(f'Error Connecting: {errc}')
except requests.exceptions.Timeout as errt:
    print(f'Timeout Error: {errt}')
except requests.exceptions.RequestException as err:
    print(f'OOps: Something Else: {err}')


