# ClickJacking attack and its countermeasure:
- Implementation of clickjacking attack in nodejs with expressjs
- CSP headers with frame-ancestor directive for the countermeasure, which will block any external page from embedding the original website

# How to run:
- Docker compose contains all the necessary things required to run this demo
- Clone this repo (recursively!!)
```sh
cd clickjacking_attack_and_countermeasure
docker-compose build
docker-compose up
```

Docker-compose contains the necessary build commands and commands to setup the local mongodb server.
After deployment blog-app should be available on 10.9.0.5, the attacker on 10.9.0.7, and mongodb server on 10.9.0.10.
