![Xeroxcore logo](https://github.com/Xeroxcore/Xeroxcore/blob/master/resources/images/Xeroxcore_Logo.png)
<br/><br/>

## Introduction

Xeroxcore website shows of how to integrate with xeroxcore API and at the same time giving other
developers a template site to copy and change for their own needs. This project is good for
new Anuglar Developers trying to learn more about Angular.

### Getting started

These instructions are aimed at helping you set up the project for development or testing purposes.
If you wish to put the project in production, please check our [Deployment section](#deployment).

### Prerequisites

The following tools are required for the App to function please make sure that necessary tools
are installed and if not, install them utilizing the provider's main pages.

- [Node.js](https://nodejs.org/en/) - Node.js 12.x.x
- [Angular CLI](https://cli.angular.io/) - Angular CLI

### Installing

This sections explains how to install necessary components to run the Angular App in a development
enviroment. Each section will explain how to install

#### Node.js

##### Windows

```
1. open a browser and go to Node.js website https://node.org
2. Dowload the latest version.
3. run node-v.xx.xx.x-x64.msi and follow the installation steps
4. open command line an enter npm -v output: x.xx.x showing version.
```

#### Angular CLI

Installing Angular requres node.js so if you havent installed Node.js then go to the previuse step
and install Node.js.

```
1. open command line
2. npm install -g @angular/cli
3. ng --version output: information about angular,node etc.
```

### Deployment

This part explain how to deploy Xeroxcore Website on a server in a non containerized
enviroment.

```
1. Open commandline to and navigate to src/xeroxcore.
2. enter following command (ng b --prod=true).
3. all files will be exported to src/dist.
4. move file to your server.
 4.1 make sure that all redirects are passing trough index.html
  4.1.1 [Angular Deployment Config](https://angular.io/guide/deployment)
```

### Built With

API was built with the following tools in a Windows Environment.

- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor
- [Angular](https://www.postgresql.org/) - Angular

### Contributing

### Versioning

We use [SemVer](http://semver.org/) for versioning. Please visit their website for more
information to understand how different versions might affect you and your project.

### Authors

- **Nasar Eddaoui** - _Initial work_ - [Nasar Eddaoui](https://github.com/Nasar165)

See also the list of [contributors](https://github.com/Xeroxcore/Xeroxcore//graphs/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### Acknowledgments
