# JSON Server

- This server provides the API containing dummy data for LogiNext Assignment.
- Command to run the server:
``` json-server --watch db.json --port=3004 ```
- This hosts the API on localhost port ```3004```
- The data is fetched through this url locally: http://localhost:3004/users
- Dummy Data:
```
[
  {
    "id": 10,
    "username": "Tiana_Hilll44",
    "name": "Rosanna",
    "email": "Waldo.Stark@yahoo.com",
    "phone": "610-371-7490 x1581",
    "website": "specific-howitzer.com",
    "address": {
      "street": "Damaris Haven",
      "suite": "7291",
      "city": "Marysville",
      "zipcode": "75053"
    },
    "company": {
      "name": "Dickinson - Kihn"
    }
  },
  {
    "id": 9,
    "username": "Faye91",
    "name": "Jarret",
    "email": "Eloy_Jacobs79@gmail.com",
    "phone": "(780) 703-2160 x056",
    "website": "lone-fail.net",
    "address": {
      "street": "Hintz Burg",
      "suite": "05895",
      "city": "Urbana",
      "zipcode": "27279-7384"
    },
    "company": {
      "name": "Walsh - Haag"
    }
  },
  {
    "id": 8,
    "username": "Timothy36",
    "name": "Levi",
    "email": "Marcos.McClure45@gmail.com",
    "phone": "1-622-900-3601 x99122",
    "website": "forked-movie.com",
    "address": {
      "street": "Theresa Flat",
      "suite": "2750",
      "city": "East Morganhaven",
      "zipcode": "50281"
    },
    "company": {
      "name": "Kunde - Wintheiser"
    }
  },
]
```
