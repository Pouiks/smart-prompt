export const fr = {
    translation: {
        app: {
            title: 'Perfect Prompt Builder',
            premiumMode: 'Mode Premium',
            unlockPremium: 'Activez pour débloquer les options premium (cadenas).',
            toggleOn: 'Désactiver',
            toggleOff: 'Activer'
        },
        sections: {
            subject: 'Sujet Principal',
            subjectPlaceholder: 'Décrivez votre sujet principal (ex: Un chat astronaute...)',
            finalPrompt: 'Prompt Final',
            copy: 'Copier le Prompt',
            copied: 'Prompt copié dans le presse-papier !',
            empty: 'Le prompt s\'affichera ici...',
            demoTools: 'Outils Démo'
        },

        warnings: {
            inconsistencyTitle: 'Attention : Incohérence détectée',
            inconsistencyDesc: "'{{style}}' et 'Style Raw' peuvent se neutraliser ou produire un résultat imprévisible. Considérez de n'en garder qu'un."
        },
        levels: {
            beginner: 'Débutant',
            intermediate: 'Intermédiaire',
            expert: 'Expert'
        },
        categories: {
            // Standard/Generic
            scene: 'Caméra & Scène',
            style: 'Style & Artistique',
            lighting: 'Lumière & Ambiance',
            material: 'Matériaux & Rendu',
            postprocess: 'Détails Post-Production',
            technical: 'Paramètres Techniques',

            // Midjourney specific
            mj_parameters: 'Paramètres (Suffixes)',

            // Stable Diffusion specific
            sd_quality_boosters: 'Boosters de Qualité',
            sd_negative_prompts: 'Prompts Négatifs (Ce qu\'il faut éviter)',
            sd_settings: 'Réglages Techniques',
            sd_styles: 'Styles Artistiques Spécifiques',

            // DALL-E 3 specific
            dalle_formats: 'Formats & Ratios',
            dalle_modifiers: 'Modificateurs de Style',
            dalle_vibes: 'Ambiance & Vibe',
        },
        options: {
            cam_closeup: { label: 'Gros Plan', description: 'Mise au point sur un détail précis ou un visage.', tooltip: "Idéal pour mettre l'accent sur l'émotion." },
            cam_wide: { label: 'Grand Angle', description: 'Vues larges, contexte étendu.', tooltip: "Parfaites pour les paysages ou les scènes d'action étendues." },
            cam_medium: { label: 'Plan Moyen', description: 'Cadrage du sujet de la tête à la taille.', tooltip: "Standard pour les portraits." },
            cam_establish: { label: "Plan d'Ensemble", description: 'Vue générale du décor avant l\'action.', tooltip: "Situe le contexte." },
            cam_drone: { label: 'Vue Drone', description: 'Perspective très élevée pour un aperçu complet.', tooltip: "Perspective aérienne." },
            cam_high: { label: 'Vue Plongée', description: 'La caméra regarde le sujet de haut en bas.', tooltip: "Rend le sujet plus petit." },
            cam_low: { label: 'Vue Contre-Plongée', description: 'La caméra regarde le sujet de bas en haut.', tooltip: "Rend le sujet imposant." },
            cam_anamorphic: { label: 'Anamorphique', description: 'Rapport d\'aspect large, flou d\'arrière-plan stylisé.', tooltip: "Look cinéma." },
            cam_fisheye: { label: 'Fisheye', description: 'Distorsion sphérique pour un effet grand-angle extrême.', tooltip: "Effet bulle." },
            cam_macro: { label: 'Macro', description: 'Focus extrême sur de très petits détails.', tooltip: "Pour insectes ou textures." },
            cam_tiltshift: { label: 'Tilt-Shift', description: 'Effet de miniaturisation.', tooltip: "Donne un aspect maquette." },
            cam_rulethirds: { label: 'Règle des Tiers', description: 'Composition classique et équilibrée.', tooltip: "Guide de composition." },
            cam_dof: { label: 'Profondeur de Champ', description: 'Contrôle du flou d\'arrière-plan (Bokeh).', tooltip: "Isole le sujet." },
            cam_dutch: { label: 'Angle Néerlandais', description: 'Prise de vue inclinée dramatique.', tooltip: "Crée un malaise ou du dynamisme." },
            cam_oneshot: { label: 'Plan Séquence', description: 'Impression de mouvement continu.', tooltip: "Fluidité visuelle." },

            style_hyperreal: { label: 'Hyperréalisme', description: 'Rendu photographique extrême.', tooltip: "Comme une photo." },
            style_surreal: { label: 'Surréalisme', description: 'Style onirique et incohérent.', tooltip: "Rêve et étrange." },
            style_lowpoly: { label: 'Low Poly', description: 'Rendu 3D stylisé, peu de polygones.', tooltip: "Esthétique jeu vidéo rétro 3D." },
            style_vapor: { label: 'Vaporwave / Steampunk', description: 'Rétro-futuriste (vapeur ou néon).', tooltip: "Mélange de styles." },
            style_8bit: { label: 'Pixel Art 8-bit', description: 'Graphismes de jeux vidéo rétro.', tooltip: "Nostalgie." },
            style_synth: { label: 'Synthwave', description: 'Esthétique néon et années 80.', tooltip: "Couleurs vibrantes." },
            style_cinematic: { label: 'Cinématographique', description: 'Qualité de film, couleurs riches.', tooltip: "Ambiance cinéma." },
            style_concept: { label: 'Concept Art', description: 'Pour le développement de jeux/films.', tooltip: "Esquisse détaillée." },
            style_sketch: { label: 'Esquisse', description: 'Dessin au trait.', tooltip: "Crayon ou fusain." },
            style_paint: { label: 'Peinture', description: 'Style pictural classique.', tooltip: "Huile ou aquarelle." },
            style_cyber: { label: 'Cyberpunk', description: 'Futuriste sombre.', tooltip: "High tech, low life." },
            style_voxel: { label: 'Voxel Art', description: 'Pixels volumétriques (cubes).', tooltip: "Style Minecraft." },
            style_manga: { label: 'Manga / Comics', description: 'Bande dessinée.', tooltip: "Traits noirs, couleurs aplat." },
            style_arch: { label: 'Architecture', description: 'Lignes épurées, géométrie.', tooltip: "Minimalisme." },

            light_volumetric: { label: 'Lumière Volumétrique', description: 'Rayons visibles.', tooltip: "God Rays." },
            light_rim: { label: 'Éclairage Rim', description: 'Contre-jour contour.', tooltip: "Détache le sujet du fond." },
            light_key: { label: 'Lumière Clé', description: 'Source principale.', tooltip: "Définit l'ambiance." },
            light_fill: { label: 'Lumière de Remplissage', description: 'Adoucit les ombres.', tooltip: "Moins de contraste." },
            light_soft: { label: 'Lumière Douce', description: 'Ombres diffuses.', tooltip: "Style studio." },
            light_hard: { label: 'Lumière Dure', description: 'Ombres nettes.', tooltip: "Soleil de midi." },
            light_neon: { label: 'Néon', description: 'Nuit urbaine, couleurs vives.', tooltip: "Cyberpunk." },
            light_studio: { label: 'Studio', description: 'Éclairage contrôlé.', tooltip: "Propre et net." },
            light_golden: { label: 'Golden Hour', description: 'Lumière chaude rasante.', tooltip: "Coucher de soleil." },
            light_split: { label: 'Cinématique (Split)', description: 'Lumière latérale dramatique.', tooltip: "Contraste fort." },
            light_lowkey: { label: 'Lumière Faible', description: 'Sombre, mystérieux.', tooltip: "Beaucoup d'ombres." },
            light_highkey: { label: 'Lumière Élevée', description: 'Lumineux, blanc.', tooltip: "Peu d'ombres." },
            light_gel: { label: 'Gel Filtré', description: 'Filtres de couleur.', tooltip: "Couleurs créatives." },

            mat_pbr: { label: 'PBR', description: 'Simulation réaliste matériaux.', tooltip: "Rendu Physique." },
            mat_sss: { label: 'SSS', description: 'Lumière sous la surface (peau, cire).', tooltip: "Réalisme organique." },
            mat_dispersion: { label: 'Dispersion', description: 'Séparation des couleurs (prisme).', tooltip: "Effet arc-en-ciel." },
            mat_specular: { label: 'Spéculaire', description: 'Points de lumière brillants.', tooltip: "Surfaces lisses." },
            mat_fog: { label: 'Brume', description: 'Densité atmosphérique.', tooltip: "Profondeur." },
            mat_micro: { label: 'Micro-Détails', description: 'Imperfections réalistes.', tooltip: "Grain, poussière." },
            mat_frosted: { label: 'Verre Givré', description: 'Surface dépolie.', tooltip: "Translucide." },
            mat_glazed: { label: 'Émail', description: 'Surface vitrifiée.', tooltip: "Brillant." },
            mat_organic: { label: 'Organique', description: 'Textures naturelles.', tooltip: "Bois, cuir, mousse." },

            post_ca: { label: 'Aberration Chrom.', description: 'Franges de couleur sur les bords.', tooltip: "Défaut optique stylisé." },
            post_vignette: { label: 'Vignettage', description: 'Bords assombris.', tooltip: "Focus central." },
            post_grain: { label: 'Grain Film', description: 'Texture argentique.', tooltip: "Look rétro." },
            post_flare: { label: 'Lens Flare', description: 'Reflet dans\'objectif.', tooltip: "Lumière intense." },
            post_sepia: { label: 'Sépia', description: 'Filtre vieilli.', tooltip: "Monochrome chaud." },
            post_sharp: { label: 'Netteté+', description: 'Bords accentués.', tooltip: "Clarté." },
            post_grading: { label: 'Color Grading', description: 'Palette colorimétrique travaillée.', tooltip: "Ambiance cinéma." },

            tech_ar169: { label: '16:9', description: 'Format Cinéma.', tooltip: "Large." },
            tech_ar32: { label: '3:2', description: 'Format Photo.', tooltip: "Classique." },
            tech_chaos: { label: 'Chaos 80', description: 'Grande variation.', tooltip: "Imprévisible." },
            tech_iw: { label: 'Poids Image', description: 'Influence image max.', tooltip: "Requiert une image." },
            tech_quality: { label: 'Qualité 2', description: 'Rendu lent et détaillé.', tooltip: "V5 seulement." },
            tech_stylize: { label: 'Stylize 750', description: 'Fortement stylisé.', tooltip: "Artistique." },
            tech_v6: { label: 'V 6.0', description: 'Dernière version.', tooltip: "Réaliste." },
            tech_seed: { label: 'Semence', description: 'Graine fixe (test).', tooltip: "Reproductibilité." },
            tech_notext: { label: 'No Text', description: 'Exclure texte.', tooltip: "Nettoie l'image." },
            tech_noblur: { label: 'No Blur', description: 'Exclure flou.', tooltip: "Netteté max." },
            tech_32bit: { label: '32-bit', description: 'Couleurs riches.', tooltip: "Profondeur de couleur." },
            tech_vray: { label: 'V-Ray', description: 'Moteur 3D arch.', tooltip: "Architecture." },
            tech_octane: { label: 'Octane', description: 'Moteur 3D organique.', tooltip: "Artistique 3D." },
            tech_ue5: { label: 'UE5', description: 'Jeu vidéo next-gen.', tooltip: "Temps réel." },
        },
        landing: {
            heroTitle: 'Générez des Prompts IA Parfaits',
            heroSubtitle: 'Créez des images époustouflantes avec Midjourney, Stable Diffusion et DALL-E 3. Notre constructeur multi-moteur vous guide à travers les styles et paramètres techniques complexes de chaque IA.',
            ctaStart: 'Choisir votre Moteur IA',
            features: {
                visualTitle: 'Multi-Moteurs Intuitif',
                visualDesc: 'Une interface unifiée pour maîtriser Midjourney V6, Stable Diffusion XL et DALL-E 3 sans apprendre chaque syntaxe par cœur.',
                techTitle: 'Expertise Technique',
                techDesc: 'Des "Weights" de Stable Diffusion aux paramètres "--stylize" de Midjourney, utilisez les options avancées sans effort.',
                optimizeTitle: 'Optimisé & À Jour',
                optimizeDesc: 'Profitez des dernières fonctionnalités de chaque modèle : Prompt Négatif pour SD, Langage Naturel pour DALL-E, Paramètres V6 pour MJ.'
            },
            seo: {
                title: 'Un Prompt Builder Universel pour l\'IA Générative',
                p1: 'La création d\'images par IA nécessite un vocabulaire technique spécifique à chaque modèle. Notre Prompt Builder Universel simplifie ce processus pour Midjourney, Stable Diffusion et DALL-E, transformant vos idées en commandes parfaitement formatées.',
                subtitle1: 'Maîtrisez Midjourney, Stable Diffusion et DALL-E',
                p2: 'Chaque IA a sa grammaire : Midjourney préfère les paramètres en suffixe, Stable Diffusion excelle avec des mots-clés et des prompts négatifs, tandis que DALL-E 3 demande des phrases descriptives. Notre outil adapte automatiquement la structure de votre prompt au moteur choisi.',
                subtitle2: 'Optimisation Technique Sans Effort',
                p3: 'Ne perdez plus de temps à vérifier la syntaxe. Que vous ayez besoin de régler le poids (::) d\'un terme ou d\'ajouter un "Negative Prompt" complexe, notre interface gère la complexité technique pour vous laisser vous concentrer sur la créativité.'
            },
            faq: {
                q1: 'Quelles IAs sont supportées ?',
                a1: 'Actuellement, nous supportons Midjourney V6 (et Niji), Stable Diffusion (XL & 1.5), et DALL-E 3. D\'autres moteurs seront ajoutés prochainement.',
                q2: 'Est-ce gratuit ?',
                a2: 'Oui, l\'outil est 100% gratuit. Une option "Premium" de démonstration existe pour montrer les fonctionnalités avancées.',
                q3: 'Comment fonctionne la génération multi-moteur ?',
                a3: 'Sélectionnez simplement votre moteur sur l\'accueil. L\'interface s\'adapte automatiquement pour afficher uniquement les options et paramètres pertinents pour cette IA.'
            }
        }
    }
};
