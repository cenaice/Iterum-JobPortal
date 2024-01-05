# Apply Link scrape test
from bs4 import BeautifulSoup
import requests

URL_1 = "https://careers.bloomberg.com/job/detail/118309"
URL_2 = "https://boards.greenhouse.io/chalkinc/jobs/4321156005"


def test_url_for_tags(URL):
    try:
        URL_response = requests.get(URL, timeout=5)
        URL_response.raise_for_status()

        soup = BeautifulSoup(URL_response.text, 'lxml')
        rows = soup.find_all('tr')

        print('hi')
        print(soup)


    except requests.exceptions.HTTPError as errh:
        print(f'HTTP Error: {errh}')


def extract_job_description(html_content):
    try:
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Identify the common patterns or keywords in the HTML structure to locate job descriptions
        description_elements = soup.find_all(['div', 'p', 'span'], class_=["job-description", "job-desc", "description", "desc"])
        
        job_description = ""
        for element in description_elements:
            job_description += element.get_text()
            
        return job_description.strip()
    except Exception as e:
        print(f"Error extracting job description: {str(e)}")
        return None

def fetch_job_description(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
        else:
            return None
    except Exception as e:
        print(f"Error fetching URL {url}: {str(e)}")
        return None
    
description = fetch_job_description(URL_1)
final_description = extract_job_description(description)
print(final_description)