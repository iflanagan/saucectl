Note: the first time you run these you will need to download the container which can take up to 25-30 seconds

How to upgrade saucectl 

curl -L https://saucelabs.github.io/saucectl/install | bash


echo "Running a test using Sauce's DevX"; cd <directorywhereyoudownloadedorclonedthesource>; saucectl run -c puppeteer.yml; saucectl run -c testcafe.yml; saucectl run -c playwright.yml

---how to run on a different DC------

saucectl run --region eu-central-1 -c testcafe.yml

--------run other examples-------------

saucectl run -c testcafe.yml
saucectl run -c playwright.yml	
saucectl run -c puppeteer.yml
saucectl run -c cypress.yml
