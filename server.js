const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;

const app = express();

app.use("/", express.static('./build/es5-bundled'))
app.use("/bower_components/ing-uic-input/assets/translations", express.static('./translations'))
app.use("/bower_components/ing-uif-styles/assets", express.static('./assets'))

app.use("/api", bodyParser.json())
app.use("/api", bodyParser.urlencoded())


app.get('/api/unite/authentication', (req, res) => {
  res.send(401);
});

app.get('/api/authentication-means/nl-username-passwords/actions/authenticate', (req, res) => {
  res.type('json')
  res.send(')]}\',\n' +
    '{"data":{"savedUsernames":[{"type":"Z","value":""}]}}');
});


app.get('/internetbankieren/SesamCookieServlet*', (req, res) => {
  res.type('json')
  res.send(')]}\',{"data":{"savedUsernames":[]}}');
});

app.get('/api/content/entrances/logins', (req, res) => {
  res.type('json')
  res.send(')]}\',\n' +
    '{"_links":{"self":{"href":"https://mijn.ing.nl/api/content/entrances/logins?taxonomy_path=%2FEntrances%2FLogin","hreflang":"nl-NL"}},"_embedded":{"entrances":[{"_links":{"self":{"href":"https://mijn.ing.nl/api/content/entrances/logins/137509","hreflang":"nl-NL"}},"entranceType":"LOGIN_ENTRANCE","meansOfAuthentication":{"netherlands":{"usernamePassword":[{"_links":{"help":{"href":"https://inlogcodes.mijn.ing.nl/particulier/zelf-regelen/instellen/inlogcodes/index.jsp","title":"Wachtwoord en/of gebruikersnaam vergeten?","hreflang":"nl-NL"}}},{"_links":{"help":{"href":"https://aanvragen.ing.nl/particulier/aanvragen/aanvraagframe.html","title":"Mijn ING aanvragen","hreflang":"nl-NL"}}},{"_links":{"help":{"href":"https://www.ing.nl/particulier/klantenservice/index.html","title":"Contact met ING","hreflang":"nl-NL"}}}],"pac":[{"_links":{"help":{"href":"https://www.ing.nl/particulier/klantenservice/index.html","title":"Contact met ING opnemen","hreflang":"nl-NL"}}}],"unableLogin":[{"_links":{"help":{"href":"http://www.browseropschonen.nl/","title":"Problemen met inloggen? Schoon uw browser op","hreflang":"nl-NL"}}},{"_links":{"help":{"href":"https://www.ing.nl/particulier/klantenservice/index.html","title":"Contact met ING opnemen","hreflang":"nl-NL"}}}]},"belgium":{"cardReader":[{"_links":{"help":{"href":"https://www.ing.be/nl/retail/contact","title":"Contact met ING","hreflang":"nl-NL"}}}],"unconnectedCardReader":[{"_links":{"help":{"href":"https://www.ing.be/nl/retail/contact","title":"Contact met ING","hreflang":"nl-NL"}}}],"itsmeApp":[{"_links":{"help":{"href":"https://www.ing.be/nl/retail/contact","title":"Contact met ING","hreflang":"nl-NL"}}}],"unableLogin":[{"_links":{"help":{"href":"https://www.ing.be/nl/retail/contact","title":"Contact met ING","hreflang":"nl-NL"}}}]}},"messages":[{"type":"Informational","title":"Nieuw uiterlijk, vertrouwd inloggen","body":"Is het je opgevallen? Inloggen bij Mijn ING is vernieuwd.","_links":{"followUp":{"href":"https://www.ing.nl/de-ing/veilig-bankieren/nieuwe-login-pagina/index.html","title":"Meer over de nieuwe inlogpagina","hreflang":"nl-NL"}}},{"title":"Pas op voor phishing","body":"De afgelopen periode zijn naast de traditionele e-mails ook klanten per SMS of per whatsapp benaderd door phishers.","_links":{"followUp":{"href":"https://www.ing.nl/de-ing/veilig-bankieren/belangrijke-mededelingen/phishers_gebruiken_nieuwe_contact-methoden.html","title":"Meer informatie","hreflang":"nl-NL"}}},{"title":"We gaan onderhoud doen","body":"Zaterdag 22 juli van 00:00 tot 04:00 kan je mogelijk niet inloggen. Sorry voor het ongemak.","_links":{"followUp":{"href":"https://www.ing.nl/particulier/klantenservice/beschikbaarheid/index.html","title":"Over het onderhoud","hreflang":"nl-NL"}}}]}]}}');
});

app.get('/suitable-means', (req, res) => {
  res.type('json')
  res.send(')]}\',[{"name":"nl-username-passwords","metadata":{}},{"name":"de-email-password","metadata":{}},{"name":"corporatekey-password","metadata":{}}]');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})