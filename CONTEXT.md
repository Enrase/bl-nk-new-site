# Context Claude Code - BL NK Landing Pages

## 🎯 Projet & Objectif
- **Template landing page premium** pour agences SEO
- Réutilisable pour différents secteurs (avocats, dentistes, etc.)
- Workflow rapide d'adaptation du template selon les besoins clients

## 🎨 Préférences de Design

### Style "Rock" Signature
- **Badges noirs rotatés** sur mots-clés importants : `transform -rotate-1`
- Animation wiggle au hover avec effet premium
- Exemple : `<span class="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">mot-clé</span>`

### Palette Couleurs Harmonieuse
- **Couleurs principales** : blue-500/600, green-500/600, purple-500/600
- **Gris sophistiqués** pour les effets neutres
- **Éviter** : couleurs vives qui dénotent (yellow flashy, orange vif, etc.)
- **Préférer** : dégradés subtils et élégants

### Animations Subtiles
- `animate-on-scroll` : fade-up au scroll avec Intersection Observer
- Effets hover : scale des icônes, translate-y des cards
- **Glow effects** au hover : très subtils, pas flashy
- Micro-animations qui "magnifient" sans surcharger

## 🏗️ Structure Template

### Sections Obligatoires (dans l'ordre)
1. **Hero** - Titre + badge + KPIs + CTA
2. **Importance du service** - 3 cards grises sur fond noir
3. **Avantages concrets** - 4 cards blanches (couleurs harmonisées)
4. **Services** - 3 services détaillés
5. **Équipe** - 3 membres d'équipe avec avatars colorés
6. **Processus** - 4 étapes
7. **Comparaison** - Service vs alternatives
8. **Résultats** - Section noire avec témoignages
9. **Pourquoi nous choisir** - 3 features
10. **KPIs bar** - Barre de réassurance
11. **Stratégie avancée** - Section technique
12. **Avis Google** - Reviews authentiques
13. **FAQ** - Questions/réponses
14. **Portfolio** - Réalisations
15. **CTA Final** - Appel à l'action + 3 garanties
16. **Footer** - Liens + infos légales

### Harmonisation Visuelle
- **Fonds noirs** : `bg-gradient-to-br from-gray-900 to-black`
- **Cards blanches** : `bg-white border border-gray-200 rounded-2xl p-8`
- **Cards grises** : `bg-gray-800 border border-gray-700 rounded-2xl p-8`
- **Effets premium** : backdrop-blur, glow subtils, shadows élégantes

## 🔄 Workflow d'Adaptation

### Étapes Standard
1. **Copier le template** : `cp template-landing-premium.html index.html`
2. **Adapter le contenu** : Remplacer textes selon nouveau secteur
3. **Ajuster les KPIs** : Rendre crédibles selon la thématique
4. **Modifier l'équipe** : Noms, rôles, spécialités adaptées
5. **Personnaliser services** : 3 services spécifiques au secteur
6. **Adapter FAQ** : Questions pertinentes au domaine
7. **Affiner testimonials** : Avis clients du secteur

### Préférences Techniques
- **Travail en local** : `python3 -m http.server 8000` pour les itérations
- **Pas de déploiement immédiat** : on affine d'abord en local
- **Git commits réguliers** : documenter chaque amélioration
- **Déploiement final** : GitHub + Vercel quand satisfait

## 💬 Style de Communication Préféré
- **Concis et direct** : pas de blabla inutile
- **Itérations rapides** : proposer > tester > ajuster
- **Explications techniques** quand nécessaire
- **Validation avant gros changements**

## 🚫 Éléments à Éviter
- **Glassmorphism complexe** : on a simplifié pour éviter les bugs
- **Couleurs trop vives** : restent harmonieuses avec le hero
- **Animations lourdes** : subtilité avant tout
- **Éléments décoratifs inutiles** : on a enlevé les "petites tuiles"

## 📝 Exemples de Demandes Types
- "Adapte le template pour un cabinet dentaire"
- "Ajoute une section avant le portfolio"  
- "Les couleurs de cette section dénotent"
- "Simplifie cette partie, elle bugge"

## 🎯 Objectif Final
Template premium réutilisable permettant de créer rapidement des landing pages professionnelles pour différents secteurs, avec un style reconnaissable et des performances optimales.

---

*Créé le $(date) - Session BL NK Landing Template*