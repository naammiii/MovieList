import requests
from bs4 import BeautifulSoup
import json

HEADERS ={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0", "Accept-Encoding":"gzip, deflate", "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "DNT":"1","Connection":"close", "Upgrade-Insecure-Requests":"1", 'Accept-Language': 'en-US,en;q=0.5'}
URL = "https://www.imdb.com/title/tt4154796/"
r = requests.get(URL, headers=HEADERS).text
  
soup = BeautifulSoup(r, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib

quote = {}

quote['title'] = soup.find('span', attrs= {'class' : 'sc-afe43def-1 fDTGTb'}).text
quote['sinopsis'] = soup.find('span', attrs= {'data-testid': 'plot-l'}).text
quote['image'] = soup.find('img', attrs= {'class': 'ipc-image'})['src']
quote['genres'] = []

aux = soup.find('div', attrs= {'class': 'ipc-chip-list__scroller'})

for genre in aux.find_all_next('span', attrs= {'class': 'ipc-chip__text'}):
    quote['genres'].append(genre.text)

quote['genres'].remove('Back to top')

json_string = json.dumps(quote)

file = open('data.json', "w")
file.write(json_string)
file.close()

