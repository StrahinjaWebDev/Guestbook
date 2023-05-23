    Dobrodošli u moj projekat Guestbook! Napisan u Express-u i React-u sa MYSql bazom u Prismi.

-Pokretanje aplikacije

Za pokretanje ovog aplikacije potrebno je pokrenuti server komponentu (Backend) i klient komponentu (Frontend) za pokretanje aplikacije na serveru i na klientu koristiti komandu npm run dev. Za vizualno prikazivanje baze moguce je pokrenuti Prismu (npx prisma studio). Aplikacija je responsive.

---Login page

Login je prva komponenta koja se prikazuje prilikom pokretanje aplikacije.

-Za login na aplikaciju mozete koristiti neki od napravljenih usera:

----- ADMIN USERI: username: Ognjen password: Admin321   ---- Pocetno slovo u passwordu treba biti veliko
                   username: Cedomir password: Admin123

----- USERI:       username: Lemon password:1234
                   username: Random password:1234    
                            
-Prilikom logovanja ako user ne ukuca dobar username ili password dobice obavestenje kako nije uneo dobar username ili password.

-Kada se User uspesno prijavi na svoj nalog njegovi podaci se stavljaju o LocalStorage i hashovani su sa jwt tokenom na bekendu, kasnije na frontendu koristimo jwtdecode da bi dekodirali usera i njegove da bi mogli da koristimo njegove podatke u aplikaciji. 

---Home page

-Kada se ulogujete u Guestbook kao obican user dobicete poruku dobrodoslice sa ispisom vaseg imena kao i poslednjih 10 poruka napisanih u Guestbook-u. Ispod toga je ispisan tekst da mozete da ostavite poruku klikom na dugme ispod tog teksta koji je oznacen sa Leave a message

-Ako se ulogujete kao ADMIN dobijate isti deo koji ima obican user a dobijate dodatno deo za upravljanje User-ima. 
-U delu za upravljenjem User-a klikom na dugme Add new user, Admin ima opciju da doda novog User-a da mu odredi njegov username, password i da li ce biti Admin, ako ne unesete od podataka username ili password izlazi Vam pop up modal da niste uneli username ili sifru.
-Admin takodje ima mogucnost da brise Usere klikom na delete dugme, kao i da edituje usera (menjanje password-a, menjanje njegove role Admina) kada admin zavrsi sa editovanjem usera i klikne na Yes dugme (siguran je da zeli da izmeni Usera) izlazi pop-up modal da je uspesno promenjen user.

-Admini ili obicni Useri mogu da se izloguju sa svog naloga na home stranici i vrate se na Login stranicu.

---Main page

-Kada je user na main stranici ima pristup formi za slanje poruka na Guestbook kao i uvid ko je poslao poruku na Guestbook-u.

-Na formi je napisano korisnicko ime u inputu kao i textarea u koju korisnik pise svoju poruku i salje je u bazu, nakon slanja poruke korisniku je onemoguceno slaje daljih poruka (One to One relationship).

-U delu gde su ispisani Useri koji su postavili poruku na moguce je da user izbrise svoju poruku, kada user izbrise poruku izaci ce mu modal da je uspesno izbrisao poruku a u slucaju da user krene da brise poruku izaci ce mu modal da nije moguce da obrise poruku od drugog usera.

-Kao i na Home stranici user moze da se izloguje i na main stranici i vrati se na Login page.
