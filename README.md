### Technology:
1. React
2. Redux
3. RTK
4. TypeScript
5. MUI
6. Formik
7. Yup

#### A brief description of the Technical Requirements:

1) Implement a web application that can display the following pages:
/ - main, arbitrary content.
/news – page with news. you can use mock data from https://jsonplaceholder.typicode.com/ or similar services. Implement the "upload more" button when clicking on which the posts are loaded, implement the deletion of the news.
/profile - page with arbitrary text, inaccessible without authorization.

2) On the website, in the header or in the basement, implement the link:
On the main (/).
News (/news).
Profile (/profile) or the button to authorize if the user is not authorized.
Implement multilingualism for the site menu (Ukrainian - uk, English - en) using react-i18next.

3) The login form accepts "fake" data:
username: admin
password: 12345

4) If other data is entered, the following message is displayed:
Username or password entered incorrectly.
If the correct data is entered, redirect to the /profile page.
If you try to go to the /profile page without authorization, you should be redirected to the main page.

5) APPLICATION REQUIREMENTS:
Store user authorization information in localStorage. If the user has authorized and reloaded the page, the authorization should not "lose".
Use material.ui for design
Use the following stack: react, react-router-dom, react-redux, @reduxjs/toolkit, typescript
