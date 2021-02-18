# vue-togglable-bootstrap

Goal: Create an easy way to change Bootstrap porfolio with colors at run for Dark-Mode funcationalty (without using Vuetify or extra packages)

Method:
1) Using Vuex to handle the bootstrap colors change / variant changes and passing the variables through out the application.
2) Using .light and .dark classes in App.Vue to styles to store 2 colors for each variable and toggle them using a javascript method. 

Extra: 
More options can be created by creating a bootstrap custom theme or variant and using the methods above to call it. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vueBootstrap-darkmode-toggle-temp
