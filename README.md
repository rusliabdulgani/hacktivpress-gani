# hacktivpress-gani

Hacktivpress merupakan app berbasis web API (crud) artikel dengan frontend vue js.


### Untuk menjalankan aplikasi ini, lakukan langkah sbb: 
* npm init
* npm install <package yang dibutuhkan, bisa di lihat di package.json>
* jalankan server di direktori /server dengan cara: npm start
* jalankan client di direktori /client dengan cara: npm run dev

### API End Point

| API                            |  HTTP  |                 Description     |
|--------------------------------|:------:|:-------------------------------:|
| http://localhost:3000          | GET    | Home                            |
| http://localhost:3000/signup   | POST   | signup user                     |
| http://localhost:3000/signin   | POST   | signin user                     |
| http://localhost:3000/articles | GET    | get all articles                |
