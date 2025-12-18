export interface EngineOption {
    label: string;
    value: string;
    type: 'free' | 'premium';
    level: 'beginner' | 'intermediate' | 'expert';
    description?: string;
}

export interface EngineCategory {
    id: string;
    name: string;
    ui_type: 'select' | 'multi_select' | 'tags_input' | 'helper' | 'textarea_append';
    options: EngineOption[];
    description?: string;
}

export interface Engine {
    id: string;
    name: string;
    description: string;
    syntax_prefix: string;
    syntax_suffix_logic: 'parameter_separate' | 'append_negative_in_ui' | 'natural_language_append';
    categories: EngineCategory[];
}

export const ENGINES: Engine[] = [
    {
        id: 'midjourney',
        name: 'Midjourney v6',
        description: 'Le maître de l\'artistique. Idéal pour les visuels créatifs, photoréalistes et stylisés.',
        syntax_prefix: '/imagine prompt:',
        syntax_suffix_logic: 'parameter_separate',
        categories: [
            {
                id: 'mj_camera',
                name: 'Caméra & Scène (Composition & Cadrage)',
                ui_type: 'select',
                options: [
                    { label: "Gros Plan (Close-up)", value: "Close-up", type: "free", level: "beginner", description: "Mise au point sur un détail précis ou un visage." },
                    { label: "Grand Angle (Wide Shot)", value: "Wide Shot", type: "free", level: "beginner", description: "Vues larges, contexte étendu." },
                    { label: "Plan Moyen (Medium Shot)", value: "Medium Shot", type: "free", level: "beginner", description: "Cadrage du sujet de la tête à la taille." },
                    { label: "Plan d'Ensemble (Establishing Shot)", value: "Establishing Shot", type: "free", level: "intermediate", description: "Vue générale du décor avant l'action." },
                    { label: "Vue Drone (Drone View)", value: "Drone View", type: "premium", level: "intermediate", description: "Perspective très élevée pour un aperçu complet." },
                    { label: "Vue Plongée (High Angle)", value: "High Angle", type: "free", level: "intermediate", description: "La caméra regarde le sujet de haut en bas." },
                    { label: "Vue Contre-Plongée (Low Angle)", value: "Low Angle", type: "free", level: "intermediate", description: "La caméra regarde le sujet de bas en haut (effet de grandeur)." },
                    { label: "Objectif Anamorphique (Anamorphic Lens)", value: "Anamorphic Lens", type: "premium", level: "expert", description: "Rapport d'aspect large, flou d'arrière-plan stylisé (bokeh ovale)." },
                    { label: "Objectif Fisheye", value: "Fisheye Lens", type: "premium", level: "expert", description: "Distorsion sphérique pour un effet grand-angle extrême." },
                    { label: "Objectif Macro", value: "Macro Lens", type: "premium", level: "expert", description: "Focus extrême sur de très petits détails." },
                    { label: "Tilt-Shift", value: "Tilt-Shift", type: "premium", level: "expert", description: "Effet de miniaturisation ou profondeur de champ sélective." },
                    { label: "Règle des Tiers (Rule of Thirds)", value: "Rule of Thirds", type: "free", level: "intermediate", description: "Composition classique et équilibrée." },
                    { label: "Profondeur de Champ (Depth of Field)", value: "Depth of Field", type: "free", level: "intermediate", description: "Contrôle du flou d'arrière-plan (Bokeh)." },
                    { label: "Angle Néerlandais (Dutch Angle)", value: "Dutch Angle", type: "premium", level: "expert", description: "Prise de vue inclinée pour un effet dramatique ou déstabilisant." },
                    { label: "Plan Séquence (One-Shot Sequence)", value: "One-Shot Sequence", type: "premium", level: "expert", description: "Impression de mouvement continu sans coupe." }
                ]
            },
            {
                id: 'mj_styles',
                name: 'Style & Artistique (Mouvements & Techniques)',
                ui_type: 'multi_select',
                options: [
                    { label: "Hyperréalisme", value: "Hyperrealism", type: "free", level: "beginner", description: "Rendu photographique d'une précision extrême." },
                    { label: "Surréalisme", value: "Surrealism", type: "free", level: "intermediate", description: "Style onirique et incohérent (ex: Salvador Dalí)." },
                    { label: "Low Poly", value: "Low Poly", type: "premium", level: "expert", description: "Rendu 3D avec un nombre réduit de polygones, look stylisé." },
                    { label: "Vaporwave / Steampunk", value: "Vaporwave, Steampunk", type: "free", level: "intermediate", description: "Esthétique rétro-futuriste à vapeur ou glitch/néon." },
                    { label: "Pixel Art 8-bit", value: "8-bit Pixel Art", type: "free", level: "beginner", description: "Graphismes de jeux vidéo rétro." },
                    { label: "Synthwave / Retrowave", value: "Synthwave, Retrowave", type: "free", level: "intermediate", description: "Esthétique néon et années 80." },
                    { label: "Cinématographique (Cinematic)", value: "Cinematic", type: "free", level: "beginner", description: "Qualité de film, couleurs riches et grain." },
                    { label: "Concept Art", value: "Concept Art", type: "free", level: "intermediate", description: "Style dessiné, atmosphérique, souvent pour le développement de jeux/films." },
                    { label: "Esquisse au Crayon / Fusain", value: "Pencil Sketch, Charcoal", type: "free", level: "beginner", description: "Dessin au trait, monochrome ou coloré." },
                    { label: "Peinture à l'Huile / Aquarelle", value: "Oil Painting, Watercolor", type: "free", level: "beginner", description: "Style pictural classique." },
                    { label: "Post-Apocalyptique / Cyberpunk", value: "Post-Apocalyptic, Cyberpunk", type: "free", level: "intermediate", description: "Ambiance futuriste sombre ou désertique." },
                    { label: "Voxel Art", value: "Voxel Art", type: "premium", level: "expert", description: "Rendu 3D basé sur des cubes (pixels volumétriques)." },
                    { label: "Manga / Comics", value: "Manga, Comics", type: "free", level: "beginner", description: "Style graphique de bande dessinée japonaise ou américaine." },
                    { label: "Photographie d'Architecture / Minimaliste", value: "Architectural Photography, Minimalist", type: "premium", level: "intermediate", description: "Lignes épurées, focus sur la géométrie et l'espace." }
                ]
            },
            {
                id: 'mj_lighting',
                name: 'Lumière & Ambiance (Techniques d\'Éclairage)',
                ui_type: 'multi_select',
                options: [
                    { label: "Lumière Volumétrique (Volumetric Light)", value: "Volumetric Light", type: "premium", level: "intermediate", description: "Rayons de lumière visibles dans l'atmosphère (God Rays, Crepuscular rays)." },
                    { label: "Éclairage Rim (Rim Lighting)", value: "Rim Lighting", type: "premium", level: "expert", description: "Contre-jour qui crée une ligne de lumière sur le contour du sujet." },
                    { label: "Lumière Clé (Key Light)", value: "Key Light", type: "free", level: "beginner", description: "Source principale de lumière, définit l'ambiance." },
                    { label: "Lumière de Remplissage (Fill Light)", value: "Fill Light", type: "free", level: "beginner", description: "Réduit le contraste et adoucit les ombres." },
                    { label: "Lumière Douce (Softbox)", value: "Softbox Lighting", type: "free", level: "beginner", description: "Ombres diffuses, éclairage flatteur et uniforme." },
                    { label: "Lumière Dure (Hard Light)", value: "Hard Light", type: "free", level: "beginner", description: "Ombres nettes, fort contraste (ex: soleil de midi)." },
                    { label: "Néon / Noir Rétro (Neon / Retro Noir)", value: "Neon Lighting, Retro Noir", type: "free", level: "intermediate", description: "Ambiance de nuit urbaine, lumières colorées vives." },
                    { label: "Lumière de Studio (Studio Lighting)", value: "Studio Lighting", type: "free", level: "beginner", description: "Éclairage contrôlé et professionnel (setup à trois points)." },
                    { label: "Coucher de Soleil (Golden Hour)", value: "Golden Hour", type: "free", level: "beginner", description: "Lumière chaude, rasante, et saturée." },
                    { label: "Éclairage Cinématique (Split Lighting)", value: "Cinematic Lighting, Split Lighting", type: "premium", level: "intermediate", description: "Éclairage frontal intense ou technique d'ombre/lumière divisée." },
                    { label: "Lumière Faible (Low-Key)", value: "Low-Key Lighting", type: "premium", level: "expert", description: "Scène principalement sombre avec des zones de lumière limitées." },
                    { label: "Lumière Élevée (High-Key)", value: "High-Key Lighting", type: "premium", level: "expert", description: "Scène très lumineuse, peu d'ombres, tons clairs dominants." },
                    { label: "Gel Filtré (Gelled Light)", value: "Gelled Light", type: "premium", level: "expert", description: "Utilisation de filtres de couleur (gels) sur les lumières." }
                ]
            },
            {
                id: 'mj_parameters',
                name: 'Paramètres Techniques & Rendu (Profondeur & Moteur)',
                ui_type: 'multi_select',
                options: [
                    { label: "Rapport d'Aspect 16:9 (--ar 16:9)", value: "--ar 16:9", type: "free", level: "beginner", description: "Format écran large (cinéma/vidéo)." },
                    { label: "Rapport d'Aspect 3:2 (--ar 3:2)", value: "--ar 3:2", type: "free", level: "beginner", description: "Format photo classique." },
                    { label: "Chaos Élevé (--c 80)", value: "--c 80", type: "premium", level: "intermediate", description: "Augmente l'imprévisibilité et les variations (pour l'expérimentation)." },
                    { label: "Poids de l'Image 2 (--iw 2)", value: "--iw 2", type: "premium", level: "expert", description: "Augmente l'influence de l'image de départ (Image Prompt)." },
                    { label: "Qualité Q2 (--q 2)", value: "--q 2", type: "premium", level: "expert", description: "Augmente le temps de calcul pour une meilleure qualité de rendu." },
                    { label: "Détails Fin / Stylize High (--s 750)", value: "--s 750", type: "premium", level: "expert", description: "Force le moteur à styliser l'image et ajouter des détails artistiques." },
                    { label: "Version 6 (--v 6.0)", value: "--v 6.0", type: "free", level: "intermediate", description: "Spécifie la version du modèle de génération (si disponible)." },
                    { label: "Semence Aléatoire (--seed XXX)", value: "--seed 42", type: "premium", level: "expert", description: "Utilise un numéro de graine pour reproduire ou modifier une image existante." },
                    { label: "Exclure le Texte (--no text)", value: "--no text", type: "free", level: "beginner", description: "Commande négative pour éviter certains éléments." },
                    { label: "Exclure le Flou (--no blur)", value: "--no blur", type: "free", level: "intermediate", description: "Commande négative pour minimiser le flou dans l'image." },
                    { label: "Profondeur de Bits 32-bit", value: "32-bit", type: "premium", level: "expert", description: "Rendu avec une large gamme de couleurs et de nuances." },
                    { label: "Moteur V-Ray Render", value: "V-Ray Render", type: "premium", level: "expert", description: "Style et qualité de rendu 3D spécifiques à V-Ray (photographies d'architecture)." },
                    { label: "Moteur Octane Render", value: "Octane Render", type: "premium", level: "expert", description: "Style et qualité de rendu 3D spécifiques à Octane (ambiances organiques, lumières spectrales)." },
                    { label: "Moteur Unreal Engine 5 (UE5)", value: "Unreal Engine 5", type: "premium", level: "expert", description: "Rendu réaliste et détaillé de type jeu vidéo de nouvelle génération." }
                ]
            },
            {
                id: 'mj_materials',
                name: 'Matériaux & Rendu (Surface & Réflexion)',
                ui_type: 'multi_select',
                options: [
                    { label: "Rendu Physique (PBR)", value: "PBR Materials", type: "premium", level: "expert", description: "Simulations réalistes de lumière et de matière (métal, verre, rugosité)." },
                    { label: "Sous-Surface Scattering (SSS)", value: "Subsurface Scattering", type: "premium", level: "expert", description: "Diffusion de la lumière sous la surface (pour la peau, la cire, le marbre)." },
                    { label: "Dispersion Chromatique", value: "Chromatic Aberration", type: "premium", level: "expert", description: "Séparation des couleurs (prisme) pour un effet de lentille high-tech ou science-fiction." },
                    { label: "Réflexion Spéculaire (Specular Reflection)", value: "Specular Reflection", type: "premium", level: "intermediate", description: "Mise en évidence des points de lumière brillants sur les surfaces lisses." },
                    { label: "Effet de Brume / Brouillard (Fog Effect)", value: "Fog Effect", type: "free", level: "intermediate", description: "Ajout d'une densité atmosphérique (Z-Depth)." },
                    { label: "Texture de Micro-Détails", value: "Micro-Details", type: "premium", level: "expert", description: "Ajout de grain, de poussière, ou de légères imperfections pour le réalisme." },
                    { label: "Verre Givre / Givré (Frosted Glass)", value: "Frosted Glass", type: "premium", level: "expert", description: "Rendu de surface en verre dépoli." },
                    { label: "Émail / Glazed", value: "Enamel, Glazed", type: "free", level: "intermediate", description: "Surface très lisse, brillante et vitrifiée." },
                    { label: "Matériaux Organiques (Organic Materials)", value: "Organic Materials", type: "free", level: "intermediate", description: "Focus sur les textures naturelles (bois, cuir, mousse)." }
                ]
            },
            {
                id: 'mj_details',
                name: 'Détails Post-Production (Finition)',
                ui_type: 'multi_select',
                options: [
                    { label: "Aberration Chromatique (Chromatic Aberration)", value: "Chromatic Aberration", type: "premium", level: "expert", description: "Franges de couleur aux bords des objets (défaut de lentille stylisé)." },
                    { label: "Vignettage (Vignette)", value: "Vignette", type: "free", level: "beginner", description: "Assombrissement subtil des bords de l'image." },
                    { label: "Grain de Film 35mm", value: "35mm Film Grain", type: "free", level: "intermediate", description: "Ajout d'une texture de film argentique pour un look rétro." },
                    { label: "Flare de Lentille (Lens Flare)", value: "Lens Flare", type: "free", level: "intermediate", description: "Effet lumineux de réflexion sur la lentille de la caméra." },
                    { label: "Teinte Sépia / Monochrome", value: "Sepia, Monochrome", type: "free", level: "beginner", description: "Filtre de couleur général (vieilli ou noir et blanc)." },
                    { label: "Netteté Extrême (Sharpened)", value: "Sharpened", type: "free", level: "intermediate", description: "Augmentation de la clarté et des bords." },
                    { label: "Calibrage des Couleurs (Color Grading)", value: "Color Grading", type: "premium", level: "expert", description: "Spécifie une palette ou une ambiance colorimétrique (ex: Teal and Orange)." }
                ]
            }
        ]
    },
    {
        id: "stable_diffusion",
        name: "Stable Diffusion (Expert Mode)",
        description: "Contrôle technique total. Gère les poids (weight), les prompts négatifs et les styles spécifiques.",
        syntax_prefix: "",
        syntax_suffix_logic: "append_negative_in_ui",
        categories: [
            {
                id: "sd_settings",
                name: "⚙️ Paramètres Techniques & Samplers",
                ui_type: "select",
                options: [
                    { "label": "Sampler : Euler a (Rapide/Créatif)", "value": "Sampler: Euler a, Steps: 20", "type": "free", "level": "beginner", "description": "Le standard pour des résultats rapides et artistiques." },
                    { "label": "Sampler : DPM++ 2M Karras (Réaliste)", "value": "Sampler: DPM++ 2M Karras, Steps: 30", "type": "premium", "level": "expert", "description": "Le meilleur pour le photoréalisme propre." },
                    { "label": "Sampler : DDIM (Détaillé)", "value": "Sampler: DDIM, Steps: 50", "type": "premium", "level": "expert", "description": "Très bon pour les textures complexes." },
                    { "label": "CFG Scale : Équilibré (7)", "value": "CFG Scale: 7", "type": "free", "level": "intermediate", "description": "Suit le prompt sans détruire l'image." },
                    { "label": "CFG Scale : Strict (12)", "value": "CFG Scale: 12", "type": "premium", "level": "expert", "description": "Force l'IA à obéir strictement (risque de saturation)." },
                    { "label": "Highres Fix (Upscale)", "value": "Hires. fix enabled, Denoising strength: 0.7", "type": "premium", "level": "expert", "description": "Double la résolution et ajoute des détails." }
                ]
            },
            {
                id: "sd_negative_prompts",
                name: "🚫 Prompts Négatifs (Anti-Défauts)",
                ui_type: "multi_select",
                description: "Ce que vous NE voulez PAS voir (Crucial pour SD).",
                options: [
                    { "label": "Qualité : Low Res / Flou", "value": "(worst quality:1.4), (low quality:1.4), (monochrome:1.1), lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, jpeg artifacts, signature, watermark, username, blurry", "type": "free", "level": "beginner", "description": "Le 'Universal Negative Prompt' indispensable." },
                    { "label": "Anatomie : Mains/Corps", "value": "mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, ugly, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck", "type": "free", "level": "intermediate", "description": "Pour éviter les monstres." },
                    { "label": "Style : 3D / Cartoon (Pour Réalisme)", "value": "3d, cartoon, anime, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy, DeepNegative, facing away, tilted head", "type": "premium", "level": "expert", "description": "Force le photoréalisme en excluant l'art digital." },
                    { "label": "Contenu : NSFW / Nudité", "value": "nsfw, nude, naked, uncensored, cleavage, nipple", "type": "free", "level": "beginner", "description": "Filtre de sécurité." }
                ]
            },
            {
                id: "sd_quality_boosters",
                name: "✨ Boosters de Qualité & Style",
                ui_type: "tags_input",
                options: [
                    { "label": "Masterpiece (Poids 1.2)", "value": "(masterpiece:1.2), (best quality:1.2), (highres:1.2)", "type": "free", "level": "beginner", "description": "Standard pour booster la qualité globale." },
                    { "label": "Détails 8K UHD", "value": "8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3", "type": "free", "level": "beginner", "description": "Look photo haute définition." },
                    { "label": "Style : Cyberpunk Edgerunners", "value": "cyberpunk, neon lights, synthwave style, (trigger studio style:1.3)", "type": "premium", "level": "intermediate", "description": "Futuriste et saturé." },
                    { "label": "Style : Anime (Makoto Shinkai)", "value": "makoto shinkai style, kimi no na wa style, vibrant clouds, lens flare, highly detailed", "type": "free", "level": "intermediate", "description": "Ciels magnifiques et détails fins." },
                    { "label": "Style : Peinture à l'Huile (Impasto)", "value": "oil painting, heavy strokes, (impasto:1.2), palette knife", "type": "premium", "level": "expert", "description": "Texture de peinture épaisse." },
                    { "label": "Style : Concept Art Fantaisie", "value": "fantasy art, artstation, greg rutkowski style, magic, eldritch", "type": "premium", "level": "expert", "description": "Le classique pour la fantasy." }
                ]
            },
            {
                id: "sd_camera_lighting",
                name: "🎥 Caméra & Éclairage (Pondéré)",
                ui_type: "select",
                options: [
                    { "label": "Vue Drone (Poids 1.3)", "value": "(drone view:1.3), (aerial photography:1.2)", "type": "premium", "level": "intermediate", "description": "Vue aérienne forcée." },
                    { "label": "Gros Plan Oeil (Macro)", "value": "(extreme close-up:1.4), (macro lens:1.2), detailed iris", "type": "premium", "level": "expert", "description": "Détails extrêmes sur un petit sujet." },
                    { "label": "Éclairage Cinématique", "value": "(cinematic lighting:1.2), (volumetric lighting:1.1), god rays", "type": "free", "level": "intermediate", "description": "Lumière dramatique de film." },
                    { "label": "Cyberpunk Néon", "value": "(neon lighting:1.3), cyan and magenta, dark environment", "type": "free", "level": "intermediate", "description": "Ambiance nuit futuriste." }
                ]
            }
        ]
    },
    {
        id: "dalle_3",
        name: "DALL-E 3 (Natural Language)",
        description: "Optimisé pour le langage naturel et la précision sémantique. Ne gère pas les paramètres techniques complexes.",
        syntax_prefix: "Génère une image de...",
        syntax_suffix_logic: "natural_language_append",
        categories: [
            {
                id: "dalle_formats",
                name: "📐 Formats & Mises en Page",
                ui_type: "select",
                options: [
                    { "label": "Format Paysage (1792x1024)", "value": "Génère une image au format large (paysage).", "type": "free", "level": "beginner", "description": "Format cinéma/écran." },
                    { "label": "Format Portrait (1024x1792)", "value": "Génère une image au format vertical (portrait).", "type": "free", "level": "beginner", "description": "Format smartphone." },
                    { "label": "Format Carré (1024x1024)", "value": "Génère une image au format carré.", "type": "free", "level": "beginner", "description": "Format Instagram classique." },
                    { "label": "Vue en Coupe (Cutaway)", "value": "Crée une vue en coupe technique (cutaway) sur un fond blanc, montrant l'intérieur complexe de l'objet avec des légendes.", "type": "premium", "level": "expert", "description": "Révèle l'intérieur d'un objet." },
                    { "label": "Knolling (Mise à plat)", "value": "Style Knolling : dispose tous les éléments de l'image à plat, de manière organisée et symétrique, photographiés de dessus (top-down view).", "type": "premium", "level": "expert", "description": "Organisation méticuleuse d'objets." },
                    { "label": "Plan Architectural (Blueprint)", "value": "Style de plan architectural (blueprint), lignes blanches sur fond bleu, annotations techniques précises.", "type": "premium", "level": "intermediate", "description": "Style plan d'architecte." }
                ]
            },
            {
                id: "dalle_styles",
                name: "🎨 Styles Artistiques & Rendus",
                ui_type: "select",
                options: [
                    { "label": "Rendu 3D Pixar/Disney", "value": "Style d'animation 3D moderne type Pixar, éclairage doux, textures de haute qualité, expressions mignonnes, rendu Octane.", "type": "free", "level": "intermediate", "description": "Idéal pour les mascottes et personnages." },
                    { "label": "Illustration Vectorielle Flat", "value": "Illustration vectorielle plate (Flat Design), style corporate tech, couleurs solides, minimaliste, sans dégradés, fond uni.", "type": "free", "level": "intermediate", "description": "Pour le webdesign et les apps." },
                    { "label": "Photo Editorial de Mode", "value": "Photographie de mode éditoriale, prise de vue studio, éclairage dramatique, haute couture, caméra Hasselblad.", "type": "premium", "level": "expert", "description": "Look magazine de luxe." },
                    { "label": "Pixel Art 16-bit", "value": "Pixel art isométrique style jeu vidéo 16-bit des années 90, couleurs vibrantes.", "type": "free", "level": "beginner", "description": "Rétro gaming nostalgique." },
                    { "label": "Aquarelle et Encre", "value": "Peinture à l'aquarelle douce avec des contours à l'encre noire fine, style livre pour enfants, couleurs pastel.", "type": "premium", "level": "intermediate", "description": "Artistique et poétique." },
                    { "label": "Synthwave Retro 80s", "value": "Style Synthwave des années 80, grille laser au sol, soleil couchant rétro, montagnes violettes, esthétique VHS.", "type": "free", "level": "intermediate", "description": "Nostalgie années 80." },
                    { "label": "Collage Papier", "value": "Style collage de papier découpé (paper cut-out craft), effets de superposition et d'ombres portées pour donner de la profondeur.", "type": "premium", "level": "expert", "description": "Effet artisanal unique." }
                ]
            },
            {
                id: "dalle_instructions",
                name: "📝 Instructions Spéciales (Méta-Prompting)",
                ui_type: "multi_select",
                options: [
                    { "label": "Zéro Texte (No Text)", "value": "Assure-toi qu'il n'y ait absolument aucun texte, chiffre, filigrane ou lettre visible dans l'image.", "type": "free", "level": "beginner", "description": "DALL-E a tendance à ajouter du texte faux, ceci le bloque." },
                    { "label": "Inclure le Texte Précis", "value": "L'image doit inclure un panneau/texte affichant exactement le mot : '[VOTRE TEXTE ICI]'.", "type": "premium", "level": "intermediate", "description": "Pour forcer l'écriture d'un mot spécifique." },
                    { "label": "Minimalisme Extrême", "value": "Utilise un style extrêmement minimaliste, avec beaucoup d'espace négatif (vide) autour du sujet central.", "type": "premium", "level": "expert", "description": "Pour des designs épurés." },
                    { "label": "Variation de la même scène", "value": "Génère l'image exactement sous le même angle et avec le même style que la précédente, mais change [ELEMENT].", "type": "premium", "level": "expert", "description": "Utile pour itérer (nécessite le mode conversation)." }
                ]
            },
            {
                id: "dalle_lighting",
                name: "💡 Éclairage & Ambiance (Descriptif)",
                ui_type: "tags_input",
                options: [
                    { "label": "Heure Dorée (Golden Hour)", "value": "Éclairage de l'heure dorée, lumière chaude et rasante du soleil couchant.", "type": "free", "level": "beginner", "description": "Classique et flatteur." },
                    { "label": "Ambiance Sombre & Mystérieuse", "value": "Ambiance sombre, brumeuse et mystérieuse, éclairage low-key, ombres profondes.", "type": "free", "level": "intermediate", "description": "Dramatique." },
                    { "label": "Néon Futuriste", "value": "Éclairage néon intense, couleurs cyan et magenta, reflets sur le sol mouillé.", "type": "free", "level": "intermediate", "description": "Cyberpunk." },
                    { "label": "Lumière de Studio Pro", "value": "Éclairage de studio professionnel (softbox), fond neutre infini, ombres douces.", "type": "premium", "level": "expert", "description": "Pour la mise en valeur produit." }
                ]
            }
        ]
    }
];
