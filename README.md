# ExpressWeb
Szablon do prostego wykonania estetycznej, szybkiej i nowoczesnej strony internetowej dla małych firm w dwóch językach

## Główne funkcje
- Szybkie dostosowywanie treści strony z centralnego pliku - bez szukania konkretnego fragmentu tekst w kodzie
- Modularny system elementów strony i ich wariacji wykorzystujący Components Next.js
- Resposnywność i szybkość na każdym urządzeniu

## Wygląd strony
ExpressWeb domyślnie zapewnia proste, ale wyglądające profesjonalnie animacje, które sprawiają użytkownikowi dobre wrażenie bez rozpraszania go. Główne kolory strony mogą być łatwo zmienione w pliku xxx.css, który działa na przestrzeni całej strony. Układ strony jest podzielony na sekcje, z których część posiada alternatywne warianty np. cennik może przedstawiać 3 opcje cenowe, z których jedna jest wyróżniona lub 1 główną z inną oprawą graficzną. Strona jest zaprojektowana z myślą o użytkownikach korzystających z telefonów komórkowych, ponieważ znaczna część ruchu internetowego odbywa się właśnie przez te urządzenia. Wyświetlanie na telefonie automatycznie dostosowuje rozmiar elementów, aby żaden nie był trudny do przeczytania. Liczba opinii pobranych z Google zmienia się z 3 wyświetlanych na komputerach do 2. W dodatku do opcji zmienienia języka przez ładowania strony ponownie, ExpressWeb wykrywa język, w którym jest wyświetlana przeglądarka użytkownika oraz automatycznie ustawia odpowiedni język, jeżeli jest dostępny (angielski bądź polski). W przeciwnym wypadku, domyślnie ustawiany jest język angielski.

## Optymalizacja i SEO
Według Google PageSpeed Insights (PSI) - narzędzia do testowania szybkości, dostępności stron dla osób niepełnosprawnych oraz optymalizacji pod wyszukiwarki, ExpressWeb osiąga wyniki w wysokich 90. Wynika to między innymi z:
- Używaniu atrybutów aria-label na odpowiednich elementach
- Serwowanie zdjęć w nowoczesnym, skompresowanym formacie .webp zamiast tradycyjnych .png, .jpg
- Dynamicznie generowanych metadanych, mapy strony (sitemap.ts) oraz pliku robots (robots.ts)
PSI testuje szybkość ładowania strony na telefonach symulując starszy, zwolniony procesor oraz wolne połączenie internetowe 4G. Wynik ponad 90 oznacza, że nawet na takich urządzeniach ExpresWeb ładuje się błyskawicznie, nie przeszkadzając UX.

## Next.js
Biblioteka/framework Next.js zbudowany na React jest idealny pod projekt ExpressWeb ze względu na prostotę tworzenia dynamicznych komponentów, wiele wbudowanych funkcji usprawniających szybkość statycznych stron oraz łatwą integrację z różnymi API oraz platformą Vercel, która pozwala na błyskawiczny development cycle. Komeda git push origin jest wykrywana przez platformę, która natychmiast uruchamia nowy build strony.

## Integracja z Google Places API
ExpressWeb posiada komponent Reviews.tsx, który wykorzystuję Google Places API, aby automatycznie pobierać opinie Google z wizytówki firmy. Są one następnie sortowane według najwyższej oraz najdłuższej oceny. Aby:
- zapobiec nadużyciu płatnych API calls
- usprawnić każde kolejne ładowanie strony po pierwszym
- nie wykonywać nadmiernej ilości requestów HTTP
ExpressWeb wykorzystuje cache przeglądarki użytkownika i zapisuje pobrane opinie na 24h, po czym pobierane są nowe.

## Integracja z Resend
Projekt ExpressWeb zawiera komponent Contact.tsx, który pozwala na kontakt z firmą bez opuszczania strony w postaci formularza, który wysyła maila na adres podany przez firmę. Platforma Resend pozwala na przegląd wysłanych przez użytkowników maili oraz inne analityki. Potencjalną opcją na przyszłość jest implementacja systemu listy mailingowej, który wykorzystując opcję cyklicznego wywoływania funckji platformy Vercel, wysyłałby np. miesięczne maile promocyjne do klientów zapisanych na listę.

## Uruchamianie
Do pełnej funkcjonalności projektu wymagane są klucze API Google Places oraz Resend jak i Google Places ID firmy. Należy sklonować repozytorium do lokalnego foldera oraz uruchomić komendę `pnpm dev`. Na lokalnej maszynie wymagane są Node.js, Next.js, Tailwind oraz biblioteki przez nie wymagane.

Alternatywnie, przykładowa demonstracja dostępna jest pod adresem expressweb-prototype.vercel.app
