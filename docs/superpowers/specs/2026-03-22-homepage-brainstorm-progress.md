# Homepage Brainstorm — Progress Document

> En cours de brainstorm. Ce fichier capture toutes les decisions prises pour eviter la perte en cas de compression de contexte.
> Date: 2026-03-22

---

## 1. Positionnement

**Ancien** : "Partenaire des SaaS Immo en early-stage" — abandonne, pas honnete vs le portfolio.

**Nouveau** : Jonathan = Senior Product Designer freelance, profil polyvalent (research + visual + code), qui a quitte les grands groupes pour bosser avec des startups ou ca avance vite. Background psy / user research, 3+ ans en equipe produit (TDF), sait coder et shipper avec l'IA. Deux secteurs de coeur : immobilier et finance — choisis par passion, pas par brief.

**Message cle** : "Je suis un designer senior polyvalent qui ship, et je choisis de bosser avec des startups dans l'immo et la finance parce que ca me passionne."

---

## 2. Decisions globales

| Element | Decision |
|---------|----------|
| Langue | Anglais (tout le site) |
| Ton | Direct, confiant, zero bullshit. Inspire confiance, pas de jargon marketing |
| Localisation | Based in Luxembourg, working remotely |
| Design system | Blueprint architectural (bordures, pas d'ombres, Space Grotesk + Manrope) |
| Hover projets | Hover CLASSIQUE (PAS d'inversion fond noir/blanc) |
| Images projets | En COULEUR directement (PAS de grayscale → couleur au hover) |
| Logos clients | NON — pas honnete en tant que consultant |
| Metriques | Integrees dans chaque carte projet (PAS de bande separee — decision B) |
| Photo hero | `/public/images/Hero/Moi.webp` — placeholder, nouvelle photo a prendre |
| Prenom hero | Juste "Jonathan" (pas nom complet) — plus approachable |

**IMPORTANT — Modifications du design system :**
- Supprimer le pattern hover-inversion sur les cartes projets (garder un hover classique)
- Supprimer le filtre grayscale par defaut sur les images
- Ces deux patterns restent dans le design system pour d'autres usages potentiels mais ne s'appliquent PAS aux cartes projets homepage

---

## 3. Structure de la homepage (ordre des sections)

```
1. Nav
2. Hero (copy gauche + photo droite)
3. Projets Featured — 3 grands (NOD, Valoris, BforBank)
4. Projets Compacts — 2 rangees empilees (Spie Bat, Malaama) + "See all projects"
5. Temoignages (bande inversee noire)
6. About teaser (parcours + perso + lien About)
7. CTA final ("Have a project? Let's talk.")
```

---

## 4. Section par section

### 4.1 Hero

**Layout** : 2 colonnes — copy a gauche, photo a droite. Mobile : copy en haut, photo en dessous.

**Photo** : `/public/images/Hero/Moi.webp` — fond transparent, naturelle. Placeholder, nouvelle photo a prendre.

**Copy valide** :
```
Hi, I'm Jonathan.
Senior Product Designer with a builder mindset. I research, design, and code.
What drives me: solving hard problems, shipping fast, and iterating until it works.
I focus on real estate and fintech startups — the industries I'm passionate about and the ones I understand best.
Based in Luxembourg, working remotely.
```

**Typographie** :
- "Hi, I'm Jonathan." → Space Grotesk Bold, taille hero clamp(48px, 8vw, 96px)
- Corps du texte → Manrope Regular 15-16px, line-height: 1.65
- "Based in Luxembourg..." → Manrope, couleur muted

**CTA** : Bouton primary noir "Get in touch" → /contact

**Decisions** :
- Juste "Jonathan" (pas le nom complet) — plus approachable
- Style inspire de Dashinsky (photo + intro simple) et Romain Penchenat (builder positioning)

---

### 4.2 Projets Featured (3 grands)

**Layout** : Full-width par projet, texte a gauche, grande image a droite. Separes par bordures horizontales. Hover classique (pas inversion). Images en couleur.

**Contenu par projet** :

#### NOD
- **Titre** : Revamping a power plant monitoring SaaS to increase kWh tracked per operator by 23%
- **Description** : Redesigned the app in dark mode — new diagnostic dashboard for production loss, integrated alerting system, and automated reporting for plant business owners, saving operators 3x30 min per day.
- **Metrique** : +23% kWh/operator
- **Tags** : Product Design · Dark Mode · TotalEnergies Digital Factory

#### Valoris
- **Titre** : Designing and building a rental management SaaS for Luxembourg legal compliance
- **Description** : Solo-built property management platform automating legal documentation — tax declarations, rent control tracking, and resale reporting. OCR-powered document processing that auto-fills ~72% of required fields for tax filings.
- **Metrique** : ~72% of tax fields automated
- **Tags** : Product Builder · Cursor / Claude Code · Entrepreneurship

#### BforBank
- **Titre** : Designing the onboarding flow that ranked #1 on Google's UX Benchmark 2023
- **Description** : Built a fully compliant banking onboarding for BforBank's complete app relaunch — meeting all KYC, security, and regulatory constraints while achieving a full account opening in under 10 minutes.
- **Metrique** : #1 Google UX Benchmark 2023
- **Tags** : UX/UI Design · Mobile Design · Onboarding Flow

**Format des titres** : Impact-first, 1 phrase complete qui inclut le resultat. Pas juste le nom du projet.

---

### 4.3 Projets Compacts (2 rangees)

**Layout** : Format compact — une ligne par projet, texte + petite image, bordure entre les deux, hover classique. Suivi d'un lien "See all projects →" vers /work.

**Projets** : Spie Bat, Malaama

**Contenu** : A DEFINIR — en attente de :
- Spie Bat : titre impact-first + metrique (harmonisation process construction)
- Malaama : angle a choisir (premier projet freelance ? design ? impact social ?)

---

### 4.4 Temoignages

**Layout** : Bande inversee noire (fond zinc-900, texte zinc-50). Section pleine largeur.

**Contenu** : Temoignage de Sandie Blanchaud — en FRANCAIS, version INTEGRALE.

```
"J'ai eu le plaisir de travailler avec Jonathan dans le cadre de mes fonctions de Lead Design Ops chez TotalEnergies. En tant que Product Designer, tu as demontré ton autonomie sur plusieurs sujets d'une grande complexité technique et stratégique en framing et en build et tu t'es toujours très bien intégré au sein de tes squads. Tu es aussi capable de t'adapter à différents contextes opérationnels. Tu es un collaborateur appliqué, impliqué et à l'écoute des feedbacks. En tant que membre du Design Studio (20 designers), tu as toujours été présent dans nos rituels d'équipe et ton caractère jovial et les questions que tu posais participaient grandement à la dynamique d'équipe. Tu as également pris très au sérieux ton rôle de mentor auprès de consultants plus juniors. Pour moi tu as toutes les qualités requises pour poursuivre une belle carrière ! Je te souhaite le meilleur pour la suite :)"

— Sandie Blanchaud, Lead Design Ops @ TotalEnergies (The Digital Factory)
```

**Note** : Espace prevu pour ajouter d'autres temoignages plus tard. Jonathan va en demander.

---

### 4.5 About Teaser

**Layout** : Section standard. Texte + lien vers /about.

**Contenu** : Mix parcours + personnalite (decision C) :
- 2-3 phrases parcours : background psychologie, 3+ ans en equipe produit TDF, freelance
- 1 phrase perso : cyclisme, WattHunter (cycling fantasy game)
- Lien "More about me →" vers /about

**Contenu exact** : A REDIGER

---

### 4.6 CTA Final

**Layout** : Section en bas de page.

**Copy** : "Have a project? Let's talk."

**CTA** : Bouton vers /contact ou mailto

---

## 5. Projets — Vue d'ensemble

| # | Projet | Secteur | Type | Homepage | Position |
|---|--------|---------|------|----------|----------|
| 1 | NOD | Energie/Monitoring | Mission client (TDF) | Featured (grand) | 1er |
| 2 | Valoris | PropTech/Immo | Produit perso (builder) | Featured (grand) | 2eme |
| 3 | BforBank | Fintech | Mission client | Featured (grand) | 3eme |
| 4 | Spie Bat | Construction | Mission client | Compact (rangee) | 4eme |
| 5 | Malaama | Association | Freelance | Compact (rangee) | 5eme |
| 6 | SmartIntegrity | Industrie | Mission client (TDF) | /work uniquement | — |
| 7 | Boosted | Data/Energie | Mission client (TDF) | /work uniquement | — |
| 8 | WattHunter | Sport/Gaming | Projet perso | About page (passion) | — |

---

## 6. References visuelles

- **Dashinsky** (dashinsky.com) — hero simple : photo + "Hi, my name is... I'm a product designer"
- **Romain Penchenat** (Notion dark) — "Data-driven designer with coding skills", builder positioning
- **Site actuel Jonathan** — section "What I love about design" avec photo
- Screenshots sauves dans `docs/Hero section/`

---

## 7. Etat du brainstorm

**Etapes completees :**
- [x] Explorer le contexte projet (fichiers, docs, roadmap)
- [x] Questions de clarification (positionnement, ton, langue, projets, hero, CTA, temoignages, about, layout)
- [x] Proposer 2-3 approches de layout (A=editorial scroll, B=grid featured, C=full-width stacks) → choix = **mix C+A**
- [x] Presenter design section par section — en cours, sections 1-2 validees (hero + projets featured)

**Section en cours :** Section 3 — Projets compacts (Spie Bat + Malaama). On attendait les reponses de Jonathan sur le contenu de ces 2 projets.

---

## 8. Prochaines etapes du brainstorm

- [ ] Definir contenu Spie Bat (titre impact-first, metrique, tags)
- [ ] Definir contenu Malaama (angle, titre, tags)
- [ ] Rediger le about teaser
- [ ] Definir le hover classique (quel effet exactement ?)
- [ ] Definir la nav (elements, layout, CTA persistant ?)
- [ ] Definir le footer
- [ ] Responsive : comment les sections s'adaptent en mobile
