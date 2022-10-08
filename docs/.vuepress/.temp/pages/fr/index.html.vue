<template><div><img :src="$withBase('/img/cat.jpg')" alt="Little cat">
<h2 id="ma-plus-grande-vie" tabindex="-1"><a class="header-anchor" href="#ma-plus-grande-vie" aria-hidden="true">#</a> Ma plus grande vie</h2>
<p>Je suis avant-vente, et je me suis spécialisé dans la donnée et l'analyse décisionnelle. <br/>
Dans ma première vie, j'étais développeur web. J'❤️ écrire du code.</p>
<!--a :href="$withBase('/personal/')">Follow my life</a-->
<h3 id="competences" tabindex="-1"><a class="header-anchor" href="#competences" aria-hidden="true">#</a> Compétences</h3>
<p>Retrouver sur ce bien joli donut, mes compétences professionnelles et aussi personnelles que j'applique au quotidien.</p>
<Chart id="chart_382ee149" data-code="{
  &quot;type&quot;: &quot;doughnut&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [{
      &quot;data&quot;: [30, 20, 10],
      &quot;backgroundColor&quot;: [
        &quot;#d2d9e9&quot;,
        &quot;#a3cef1&quot;,
        &quot;#6096ba&quot;
      ]
    }],
    &quot;labels&quot;: [&quot;Ecoute&quot;, &quot;Parler&quot;, &quot;Amour&quot;]
  }
}"></Chart><h3 id="heritage" tabindex="-1"><a class="header-anchor" href="#heritage" aria-hidden="true">#</a> Héritage</h3>
<p>Retrouver sous ses lignes graphiques, la courbe d'évolution de mes compétences au fil des années. En rouge, vous pouvez voir les prédictions sur l'avenir.</p>
<Chart id="chart_382ee165" data-code="{
  &quot;type&quot;: &quot;line&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;2000&quot;, &quot;2005&quot;, &quot;2010&quot;, &quot;2015&quot;, &quot;2020&quot;, &quot;2025&quot;, &quot;2030&quot;, &quot;2035&quot;, &quot;2040&quot;],
    &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;Héritage&quot;,
      &quot;data&quot;: [10, 20, 30, 40, 50, 60, 70, 89, 100],
      &quot;borderColor&quot;: &quot;#d2d9e9&quot;,
      &quot;fill&quot;: {
        &quot;target&quot;: &quot;origin&quot;,
        &quot;above&quot;: &quot;#e4eaf4&quot;,
        &quot;below&quot;: &quot;#6096ba&quot;
      },
      &quot;pointRadius&quot;: 5,
      &quot;backgroundColor&quot;: [
        &quot;#6096ba&quot;,
        &quot;#6096ba&quot;,
        &quot;#6096ba&quot;,
        &quot;#6096ba&quot;,
        &quot;#6096ba&quot;,
        &quot;#bc3908&quot;,
        &quot;#bc3908&quot;,
        &quot;#bc3908&quot;,
        &quot;#bc3908&quot;
      ]
    }]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true,
          &quot;callback&quot;: &quot;function(value){ return &#039; &#039; + value + &#039; ki&#039;;  }&quot;
        }
      }
    }
  }
}"></Chart><div class="custom-container tip"><p class="custom-container-title">Vie passée</p>
<p><a href="http://vincent.legeard.info/cv" target="_blank" rel="noopener noreferrer">Voir ma première vie professionnel<ExternalLinkIcon/></a></p>
</div>
<h2 id="voyages" tabindex="-1"><a class="header-anchor" href="#voyages" aria-hidden="true">#</a> Voyages</h2>
<p>Je suis allé dans quelques pays, dont beaucoup en dehors de l'Europe. Je connais très peu le continent européen pourtant j'y vis. Les projets se feront dans la durée et je devrais pouvoir trouver le temps de voyager en Italie, en Norvège, en Ecosse ou en Grèce...</p>
<div class="custom-container tip"><p class="custom-container-title">Réves passés</p>
<p><a :href="$withBase('/fr/travel/Maroc.html')">Suivre mes voyages</a></p>
</div>
<h2 id="passion" tabindex="-1"><a class="header-anchor" href="#passion" aria-hidden="true">#</a> Passion</h2>
<h3 id="manger" tabindex="-1"><a class="header-anchor" href="#manger" aria-hidden="true">#</a> Manger...</h3>
<p>Retrouver une sélection de restaurant Parisien que je mets régulièrement à jour.</p>
<div class="custom-container tip"><p class="custom-container-title">Trouver un restaurant</p>
<p><a href="https://resto.rouquin.me/" target="_blank" rel="noopener noreferrer">Liste des restos Parisiens<ExternalLinkIcon/></a></p>
</div>
<h3 id="lecture" tabindex="-1"><a class="header-anchor" href="#lecture" aria-hidden="true">#</a> Lecture...</h3>
<blockquote>
<p>Comment font les gens ? Olivia de Lamberterie (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782234088351" target="_blank" rel="noopener noreferrer">9782234088351<ExternalLinkIcon/></a>)</p>
</blockquote>
<div class="custom-container danger"><p class="custom-container-title">(Citation) Comment font les gens ? Olivia de Lamberterie</p>
<p>Kindle a remplacé les œufs Kinder, un truc gras avec une merde cachée dedans.</p>
</div>
<blockquote>
<p>En partant, le bonheur m'a dit ... de Sophia Peignot (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782322237975" target="_blank" rel="noopener noreferrer">9782322237975<ExternalLinkIcon/></a>)</p>
</blockquote>
<blockquote>
<p>L'Enigme Du Retour de Dany Laferriere (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782253156604" target="_blank" rel="noopener noreferrer">9782253156604<ExternalLinkIcon/></a>)</p>
</blockquote>
<div class="custom-container danger"><p class="custom-container-title">(Citation) L'énigme du retour (French Edition) de Dany Laferriere</p>
<p>J’avoue que c’est plus facile d’apprendre que de réapprendre. Mais le plus dur c’est encore de désapprendre.</p>
</div>
<blockquote>
<p>Morphine de Mikhaïl Boulgakov (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782070445240" target="_blank" rel="noopener noreferrer">9782070445240<ExternalLinkIcon/></a>)</p>
</blockquote>
<blockquote>
<p>Voyage d'une Parisienne à Lhassa de Alexandra David-Néel (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782266182768" target="_blank" rel="noopener noreferrer">9782266182768<ExternalLinkIcon/></a>)</p>
</blockquote>
<blockquote>
<p>Un soupçon de liberté de Margaret Wilkerson Sexton (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782330136772" target="_blank" rel="noopener noreferrer">9782330136772<ExternalLinkIcon/></a>)</p>
</blockquote>
<blockquote>
<p>La ferme africaine de Karen Blixen (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782070370375" target="_blank" rel="noopener noreferrer">9782070370375<ExternalLinkIcon/></a>)</p>
</blockquote>
<blockquote>
<p>Betty de Tiffany Mc Daniel (ISBN-13 <a href="https://www.isbnsearcher.com/books/9782351788387" target="_blank" rel="noopener noreferrer">9782351788387<ExternalLinkIcon/></a>)</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">Idées de livre</p>
<p><RouterLink to="/passion/">Ce que j'ai déjà lu ...</RouterLink></p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Offre moi un bien beau livre ❤️</p>
<p><a href="https://secure.fnac.com/wishlist/4ee4a918-3047-461c-85f9-9a6233d4fc08" target="_blank" rel="noopener noreferrer">Liste des envies sur la FNAC<ExternalLinkIcon/></a></p>
</div>
<h3 id="ecoute" tabindex="-1"><a class="header-anchor" href="#ecoute" aria-hidden="true">#</a> Ecoute...</h3>
<blockquote>
<p>Kid Francescoli - Lovers
(Yotanka Records)</p>
</blockquote>
<blockquote>
<p>Massive Attack - Blue Lines
(Virgin, Circa, Wild Bunch Records)</p>
</blockquote>
<blockquote>
<p>Rockers Hi-Fi - DJ-Kicks: The Black Album
(!K7 Records)</p>
</blockquote>
<blockquote>
<p>Basement Jaxx - Good Luck
(XL Recordings)</p>
</blockquote>
<blockquote>
<p>Coldcut - Man In A Garage
(Ninja Tune)</p>
</blockquote>
<blockquote>
<p>Sascha Funke - Bravo
(BPitch Control)</p>
</blockquote>
<blockquote>
<p>Amon Tobin - Mission
(Ninja Tune)</p>
</blockquote>
<blockquote>
<p>DJ Cam - Underground Vibes
(Attytude Recordings)</p>
</blockquote>
<blockquote>
<p>MC Solaar - Caroline
(Polydor)</p>
</blockquote>
<blockquote>
<p>DJ Vadim - Feel Up Vol.1
(Soulbeats Records)</p>
</blockquote>
<blockquote>
<p>Massive Attack - Protection
(Circa,  Wild Bunch Recordings)</p>
</blockquote>
<blockquote>
<p>Massive Attack - Mezzanine
(Circa, Virgin)</p>
</blockquote>
<blockquote>
<p>Grand Corps Malade - Mesdames
(Anouche Productions)</p>
</blockquote>
<blockquote>
<p>Justice - † (Cross)
(Ed Banger Records, Because Music)</p>
</blockquote>
<blockquote>
<p>Kruder &amp; Dorfmeister - The K&amp;D Sessions™
(!K7 Records, G-Stone Recordings)</p>
</blockquote>
<blockquote>
<p>DJ Cam - Lost Found 2
(Attytude Records)</p>
</blockquote>
<blockquote>
<p>Jamiroquai - Travelling Without Moving
(Sony Music)</p>
</blockquote>
<blockquote>
<p>Bonobo - The North Borders
(Ninja Tune)</p>
</blockquote>
<blockquote>
<p>Transglobal Underground - Psychic Karaoke
(Nation Records)</p>
</blockquote>
<blockquote>
<p>Bonobo - Fragments
(Ninja Tune)</p>
</blockquote>
<blockquote>
<p>DJ Krush - 漸 -Zen-
(Columbia, Music On Vinyl)</p>
</blockquote>
<blockquote>
<p>Hot Chip - In Our Heads
(Domino)</p>
</blockquote>
<blockquote>
<p>Neil Young - Harvest
(Reprise Records)</p>
</blockquote>
<blockquote>
<p>DJ Cam - The Beat Assassinated
(Inflamable)</p>
</blockquote>
<blockquote>
<p>Morcheeba - Big Calm
(Indochina)</p>
</blockquote>
<blockquote>
<p>Suprême NTM - Suprême NTM
(Epic, Legacy)</p>
</blockquote>
<blockquote>
<p>DJ Cam Quartet - Rebirth Of Cool
(Attytude Records)</p>
</blockquote>
<blockquote>
<p>Tricky - Maxinquaye
(4th &amp; Broadway, UMC)</p>
</blockquote>
<blockquote>
<p>Asian Dub Foundation - Facts And Fictions
(Nation Records)</p>
</blockquote>
<blockquote>
<p>Roots Manuva - Facety 2:11
(Big Dada Recordings)</p>
</blockquote>
<blockquote>
<p>DJ Shadow - Endtroducing.....
(UMC, Mo Wax, Island Records)</p>
</blockquote>
<blockquote>
<p>Bonobo - Migration
(Ninja Tune)</p>
</blockquote>
<blockquote>
<p>Nirvana - Nevermind (30th Anniversary Edition)
(Geffen Records, UMe, Sub Pop)</p>
</blockquote>
<blockquote>
<p>Portishead - Dummy
(Go! Beat)</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">Voir ma collection</p>
<p><a href="https://www.discogs.com/fr/user/magikcypress/collection" target="_blank" rel="noopener noreferrer">Collection sur Discogs<ExternalLinkIcon/></a></p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Offre moi un bien beau Vinyl ❤️</p>
<p><a href="https://www.discogs.com/fr/wantlist?user=magikcypress" target="_blank" rel="noopener noreferrer">Liste des envies sur Discogs<ExternalLinkIcon/></a></p>
</div>
</div></template>
