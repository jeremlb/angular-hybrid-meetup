# MEETUP ANGULAR // 22 MARS 2018

This project contains the code used for the Angular meet up @ContentSquare in Paris the 22nd of march 2018.

The talk is about the migration from AngularJS to Angular with an hybrid app. The link to the presentation: [click on me](https://docs.google.com/presentation/d/1weI2wjPINoMTZQQqsBsalbm22UelpXwT-Wls1NWZj2o/edit?usp=sharing)

The application use the last LTS version of NodeJs. 

The interface is in french but no need to speak french to understand it :)

# Demo
The goal of the demo is to start from a standard AngularJS app and migrate it to Angular. I created a branch for each step with the following order :

 * angular-1 : The code that we want to migrate with unit tests and e2e tests
 * angular-5 : Add config and a basic module in order to have some new code
 * hybrid : This step make the app hybrid. That's the first big step for our app
 * router : Making work together AngularJS and Angular router
 * upgrade-service : Upgrade a service from AngularJS to Angular
 * downgrade-service : Downgrade a service from Angular to AngularJS
 * downgrade-component : Downgrade a Angular component into AngularJS directive

# Install

```sh
  yarn install
```

# Start 

```sh
  yarn run dev
```

# Test 

```sh
  # unit test
  yarn run test

  # e2e
  yarn run e2e
```