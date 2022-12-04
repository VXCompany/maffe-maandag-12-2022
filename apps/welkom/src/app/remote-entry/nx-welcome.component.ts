import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'maffe-maandag-nx-welcome',
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      svg {
        display: block;
        vertical-align: middle;
      }

      svg {
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }
      pre {
        background-color: rgba(55, 65, 81, 1);
        border-radius: 0.25rem;
        color: rgba(229, 231, 235, 1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        overflow: scroll;
        padding: 0.5rem 0.75rem;
      }

      .shadow {
        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .rounded {
        border-radius: 1.5rem;
      }

      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #hero {
        align-items: center;
        background-color: hsla(214, 62%, 21%, 1);
        border: none;
        box-sizing: border-box;
        color: rgba(55, 65, 81, 1);
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #hero .text-container {
        color: rgba(255, 255, 255, 1);
        padding: 3rem 2rem;
      }
      #hero .text-container h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        position: relative;
      }
      #hero .text-container h2 svg {
        color: hsla(162, 47%, 50%, 1);
        height: 2rem;
        left: -0.25rem;
        position: absolute;
        top: 0;
        width: 2rem;
      }
      #hero .text-container h2 span {
        margin-left: 2.5rem;
      }
      #hero .text-container a {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0.75rem;
        color: rgba(55, 65, 81, 1);
        display: inline-block;
        margin-top: 1.5rem;
        padding: 1rem 2rem;
        text-decoration: inherit;
      }
      #hero .logo-container {
        display: none;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      #hero .logo-container svg {
        color: rgba(255, 255, 255, 1);
        width: 66.666667%;
        max-width: 100px;
      }

      #love {
        color: rgba(107, 114, 128, 1);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 3.5rem;
        opacity: 0.6;
        text-align: center;
      }
      #love svg {
        color: rgba(252, 165, 165, 1);
        width: 1.25rem;
        height: 1.25rem;
        display: inline;
        margin-top: -0.25rem;
      }

      @media screen and (min-width: 768px) {
        #hero {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #hero .logo-container {
          display: flex;
        }
        #middle-content {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  HERO  -->
        <div id="hero" class="rounded">
          <div class="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>It worked!</span>
            </h2>
          </div>
          <div class="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"
              />
            </svg>
          </div>
        </div>

        <div id="welcome">
          <h1>
            <span> Oke cool.. </span>
            Waar kijk ik naar?
          </h1>
        </div>

        <div>
          <p>&nbsp;</p>
          <p>
            Je hebt net een repo gedownload. 
            Er staan een berg Angular apps in die een aantal bijzondere eigenschappen hebben:
          </p>
          <ul>
            <li>
              Je bent beland in een repo met meerdere apps. Open de root map van de repo maar eens met VSCode. 
              Je ziet een /apps map. Daarin staan alle hosts(de apps waar de micro-frontends in draaien) en alle remotes(micro-frontends). 
              'shell' is in dit geval een host, en 'welkom' is een micro-frontend.
            </li>
            <li>
              De shell app (de host dus) is in dit geval de app waarin alle micro-frontends draaien.
            </li>
            <li>
              Deze app maakt gebruik van dynamic module federation. 
              De micro-frontends worden dus on the fly opgehaald. Dat kun je op een aantal plekken zien: <br />
              - Kijk maar eens bij F12 - network. Daar zie je dat remoteEntry.mjs wordt opgehaald. <br />
              - Kijk ook maar eens in /apps/shell/src/app/assets/module-federation.manifest.json. 
            </li>
            <li>
              Alle apps delen al hun dependencies. 
              Het is dus niet mogelijk om de ene app met Angular 12 te bouwen en de andere met Angular 13.
            </li>
          </ul>
        </div>

        <div id="welcome">
          <h1>
            <span> Oke cool.. </span>
            En wat moet ik nu doen?
          </h1>
        </div>

        <div>
          <p>&nbsp;</p>
          <p>
            <strong>Maak een nieuwe micro-frontend.</strong> 
            All you need to do is:
          </p>

          <pre>nx g @nrwl/angular:remote [naam-van-microfrontend-hier] --host=shell --port=420X</pre>
          <p><strong>Let op</strong> dat je geen <strong>port</strong> gebruikt die je collega's ook al gebruiken. Dan gaat het namelijk stuk!</p>

          <p>&nbsp;</p>
          <p>Wil je jouw nieuwe micr-frontend zien draaien in de shell?</p>
          <pre>nx serve shell --devRemotes=welkom,[naam-van-microfrontend-hier]</pre>

          <p>&nbsp;</p>
          <p><strong>
            Nee!! 
            Natuurlijk niet!!
            Ik wil 'm niet zien in de shell! 
            Want dan ben ik afhankelijk van iedereen!!!! 
            En dat is nu net het hele idee achter deze manier van een app bouwen!! 
            Ik wil alleen m'n eigen micro-frontend zien:
          </strong></p>
          <pre>nx serve [naam-van-microfrontend-hier]</pre>

          <p>&nbsp;</p>
          <p>
            In de /apps folder is jouw micro-frontend erbij gekomen. 
            Je kunt hier je app bouwen met angular zoals je gewend bent.
            Let wel op als je dependencies toevoegt. 
            Die voeg je voor iedereen toe.
            Voeg je ergens niet de laatste versie van toe? 
            Overleg dan met je collega's!!
            Anders slooop je boel.
          </p>

          <p>&nbsp;</p>
          <p>
            Tip: Wil je niet dat je collega's de boel slopen? Bouw ff een cypress testje voor ze.
          </p>

          <div id="welcome">
          <h1>
              <span>Let's go!</span>
              Backend nodig?
          </h1>
        </div>
          <p>&nbsp;</p>
          <p>
            Je bent hier gekomen om een front-end te bouwen. En geen back-end. Maar die heb je wel nodig.
            Ik heb al een API voor je gebouwd. Eentje waarmee je JSON objecten kunt CRUDden. De docs vind je hier:
            <u><a href="https://github.com/appie2go/Testing.GraphStoreApi" target="_blank">https://github.com/appie2go/Testing.GraphStoreApi</a></u>.
          </p>

          <p>&nbsp;</p>
          <p>
            Aris heeft er al 1 voor je opgespind in de cloud. Die kun je gebruiken. 
            Je kunt er ook lokaal 1 draaien met Docker:
          </p>
          <pre>

docker pull albertstarreveld/testing.graphstoreapi

docker run -d -p 8123:80 --name graphstoreapi albertstarreveld/testing.graphstoreapi
          </pre>
        </div>

        <div id="welcome">
          <h1>
              <span>Ok. M'n app is klaar! En nu?</span>
              Een Docker container maken
          </h1>
        </div>

        <div>
          <p>&nbsp;</p>
          <p>
            We gaan straks alle micro-frontends en de shell deployen naar een AKS cluster.
            Daarom moet de workload (jouw micro-frontend dus) in een container draaien.
            Je vindt in de root van de repo al twee dockerfiles. Dat zijn de shell.dockerfile en de welkom.dockerfile.
            welkom.dockerfile kun je als uitgangspunt gebruiken. Kopieeer die en pas die aan zodat je jouw app ermee kunt bouwen.
          </p>
          <p>&nbsp;</p>
          <p>
            Let je ook even op dat alle URLS goed staan voor productie?
          </p>
          <p>&nbsp;</p>
          <p>
            Een container bouwen doe je zo:
          </p>
          <pre>docker build -t [naam-van-je-microfrontend]:latest -f [naam-van-de-dockerfile] .</pre>
          <p>&nbsp;</p>
          <p>Een docker container draai je zo:</p>
          <pre>docker run -d -p 5201:80 [naam-van-je-microfrontend]</pre>
          <p>&nbsp;</p>
          <p>
            In dit geval draait nu je container op port 5201. 
            Gebeurt er niks? Kijk dan even in je docker dashboard. Misschien staat er een error.
          </p>
          <p>&nbsp;</p>
          <p>
            Als de container build, commit en push dan. 
            Trek even Albert aan z'n jasje, die jast 'm dan de repo in zodat Aris 'm kan deployen.
          </p>
        </div>

<div align="center">
<br />
<br />
------------------------------------------------------------
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</div>

        <div id="welcome">
          <h1>
              <span>Ik dacht dat je het nooit zou vragen.. </span>
              Hoe heb je deze repo dan gemaakt?
          </h1>
        </div>

        <div>
          <p>&nbsp;</p>
          <p>Om dit te maken moet je de volgende dingen doen:</p>
          <ul>
            <li>Je begint altijd met een nieuwe NX workspace.</li>
            <li>Daarna genereer je wat je nodig hebt... That's all there is to it:</li>
          </ul>

          <p>
            Zo maak je een micro-frontend architectuur <strong>zonder</strong> dynamic module federation. 
            Probeer dit maar eens (<strong>in een andere map uiteraard!!!</strong>):
          </p>
          <pre>

npx create-nx-workspace workspace-zonder-dynamicmodulefederation
cd workspace-zonder-dynamicmodulefederation
nx g @nrwl/angular:host myhostapp
nx g @nrwl/angular:remote mymicrofrontend --host=myhostapp

nx serve myhostapp --devRemotes=mymicrofrontend
          </pre>

          <p>
            Het resultaat zie je door met je browser naar http://localhost:4200 te navigeren.
            Open de netwerk tab als je rondklikt. 
            Je zult zien dat alle modules in de app gebakken zitten.
          </p>

          <p>&nbsp;</p>
          <p>
            Om er één te maken mét dynamic module federation doe je het volgende. 
            Dit is dus wat ik gedaan heb om deze repo te maken. Probeer dit ook maar eens 
            (<strong>weer in een andere map uiteraard!!!</strong>):
          </p>

          <pre>

npx create-nx-workspace workspace-met-dynamicmodulefederation
cd workspace-met-dynamicmodulefederation
nx g @nrwl/angular:host myhostapp --remotes=mymicrofrontend --dynamic

nx serve myhostapp --devRemotes=mymicrofrontend
          </pre>

          <p>En bekijk dit maar eens...</p>
        </div>

        <p id="love">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
