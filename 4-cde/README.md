# Docker Workshop: CDE

(open the `4-cde` directory in your IDE)

You have successfully containerized the application and made it easy to setup and share. You have also made it easy to deploy to production, and tested it in a Kubernetes cluster.

## The Problem

While containers make it very easy to run the application locally, most Developers will still need to install the tools and SDKs (Java, Maven, Node, PostgreSQL) to develop and test the code that will run in a container. 

## The Challenge

Create a way to provide a way to specifiy not only the application and its dependencies, but also the tools and SDKs needed to develop and test the code that will run in a container.

## Hints

Most IDEs inluding Visual Studio Code and IntelliJ IDEA have plugins that can be used to help with this challenge, and they all leverage containerization to provide a consistent development environment. 
