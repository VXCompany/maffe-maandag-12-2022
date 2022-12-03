# Maffe maandag 12-12-2022

De Maffe Maandag van 12 december staat in het thema van Value Proposition Design, Liberating Structures, Micro-Front-ends met NX, Kubernetes, en GitHub Actions.

We hebben net een Value Proposition map gemaakt en een backlog. De volgende stap is het bouwen van een app. Daar heb gaan we deze repo voor gebruiken.

## Monorepo
Let op! Het zou natuurlijk prachtig zijn als iedere micro-front-end z'n eigen repo zou hebben... Toch? Nee! In deze workshop nemen we als uitgangspunt van niet! (Nadere toelichting tijdens de workshop.) 

Belangrijk!
__We maken in deze workshop dus gebruik van een mono-repo!__ Dat betekent dat alle teams in dezelfde repo werken. __Overleg dus goed met je collegae!!__

## NX
Om onze micro-frontends te bouwen maken we gebruik van een monorepo management-tool genaamd NX. Meer weten? Lees:

- [https://nx.dev](https://nx.dev)
- [https://nx.dev/more-concepts/micro-frontend-architecture](https://nx.dev/more-concepts/micro-frontend-architecture)

## Uitgangspunt (dit gaan we maken)

We gaan een Single Page Application bouwen met Angular. Daar werken we met meerdere teams aan. Ieder team bouwt zijn eigen stuk. Zo'n stuk manifesteert zich in een 'app'. Die app willen we (omdat we zo min mogelijk afhankelijk van elkaar willen zijn) los kunnen deployen. Als logisch gevolg wordt zo'n app dus - at runtime - dynamisch ingeladen. 

Dat betekent dat we een 'shell' nodig hebben. Als het ware een lege huls die opgestart wordt zodra de bezoeker www.maffe-maandag.nl intypt. Dan wordt bepaald welke micro-frontend geladen moet worden. Die wordt dan ingeladen.

Omdat we AKS interessant vinden, deployen we de app in een Docker container. Dan krijg je dus dit:


```
+------------------------------------------------+
|                     Shell                      |
|  +----------------+   ^    +----------------+  |
|  |   front-end    |   |    |   front-end    |  |
|  |  component #1  |   |    |  component #2  |  |
|  +----------------+   |    +----------------+  |
|          ^            |             ^          |
+----------|------------|-------------|----------+
           |            |             |
+----------|------------|-------------|----------+
|          |            |             |    AKS   |
|          |            |             |  cluster |
|          |            |             |          |
|    +----------+ +----------+ +----------+      |
|    | docker   | | docker   | | docker   |      |
|    | containr | | containr | | containr |      |
|    +----------+ +----------+ +----------+      |
|                                                |
+------------------------------------------------+
```

## Prerequisites (dit heb je nodig om mee te doen!!)

Uiteraard gaan we geen droge Powerpoint presentatie zien. Jij gaat een micro-frontend maken. Daarvoor heb je dit nodig:

* Visual Studio Code
* Docker
* Npm
* NX. Run: `npm i nx -g`

__Zorg dat je die geinstalleerd hebt voordat je naar de workshop komt!!__

## Aanmelden
Aanmelden doe je bij Albert S, Conny, of Karin! Het liefst bij Albert. Albert en Yuri kunnen je bovendien ook toegang geven tot deze repo.

## How to get started

Clone deze repo. Trek een terminal/command prompt, navigeer naar de map waar je deze repo gecloned hebt, en run:

``` powershell
npm install
nx serve shell --devRemotes welcome
```

Open een browser, en navigeer naar http://localhost:4200. De volgende instructies vindt je daar.