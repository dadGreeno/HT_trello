# TRELLO CARD CHALLENGE
Challenge completed to demonstrate coding ability for HT.

## Spring boot app

- Run using gradle or from STS or HtTrelloApplication.java => Run As > Java App.
- Built using STS.

## Run REACT app
- Run from frontend folder using `yarn start`
- Requests to boot api are proxied through `http://localhost:8080`


## Challenge list
- Clicking the New button will prompt for a summary.
- Saving a new item will pop it as a card into the TODO column.
- Saving a new item will make an API call to persist it in a database.
- The columns can be hard coded (for both client and API)
- Allow the user to drag and drop a card from one column to another.
- This does not need to persist, unless you really want to build that part of the API. Extra credit?
- The black border’d component should be the only component-  that extends React.Component. All other components should be functional and use props only.
- Using redux is optional. State should only be managed in the single top level component.
- API should be written using Spring Boot with Java or Kotlin and a Gradle build.
- Use the H2 in memory database for storage purposes.
- Submit project as a Github project. If you don’t want to submit it as a public project, my github user is gdboling. I’ll just need access.