export const en = {
    translation: {
        app: {
            title: 'Perfect Prompt Builder',
            premiumMode: 'Premium Mode',
            unlockPremium: 'Enable to unlock premium options (lock icon).',
            toggleOn: 'Disable',
            toggleOff: 'Enable'
        },
        sections: {
            subject: 'Main Subject',
            subjectPlaceholder: 'Describe your main subject (e.g., An astronaut cat...)',
            finalPrompt: 'Final Prompt',
            copy: 'Copy Prompt',
            copied: 'Prompt copied to clipboard!',
            empty: 'The prompt will appear here...',
            demoTools: 'Demo Tools'
        },
        warnings: {
            inconsistencyTitle: 'Warning: Inconsistency Detected',
            inconsistencyDesc: "'{{style}}' and 'Style Raw' might conflict or produce unpredictable results. Consider keeping only one."
        },
        levels: {
            beginner: 'Beginner',
            intermediate: 'Intermediate',
            expert: 'Expert'
        },
        categories: {
            // Standard/Generic
            scene: 'Camera & Scene',
            style: 'Style & Art',
            lighting: 'Lighting',
            material: 'Materials',
            postprocess: 'Post-Processing',
            technical: 'Parameters',

            // Midjourney specific
            mj_parameters: 'Parameters (Suffixes)',

            // Stable Diffusion specific
            sd_quality_boosters: 'Quality Boosters',
            sd_negative_prompts: 'Negative Prompts (To Avoid)',
            sd_settings: 'Technical Settings',
            sd_styles: 'Specific Art Styles',

            // DALL-E 3 specific
            dalle_formats: 'Formats & Ratios',
            dalle_modifiers: 'Style Modifiers',
            dalle_vibes: 'Mood & Vibe',
        },
        options: {
            cam_closeup: { label: 'Close Up', description: 'Focus on a specific detail or face.', tooltip: "Ideal for emphasizing emotion." },
            cam_wide: { label: 'Wide Shot', description: 'Wide views, extensive context.', tooltip: "Perfect for landscapes." },
            cam_medium: { label: 'Medium Shot', description: 'Waist-up shot.', tooltip: "Standard for portraits." },
            cam_establish: { label: "Establishing Shot", description: 'General view of the setting.', tooltip: "Sets the context." },
            cam_drone: { label: 'Drone View', description: 'High perspective for full overview.', tooltip: "Aerial view." },
            cam_high: { label: 'High Angle', description: 'Camera looking down at subject.', tooltip: "Makes subject look smaller." },
            cam_low: { label: 'Low Angle', description: 'Camera looking up at subject.', tooltip: "Makes subject look imposing." },
            cam_anamorphic: { label: 'Anamorphic', description: 'Wide aspect ratio, stylized blur.', tooltip: "Cinematic look." },
            cam_fisheye: { label: 'Fisheye', description: 'Spherical distortion.', tooltip: "Bubble effect." },
            cam_macro: { label: 'Macro', description: 'Extreme focus on small details.', tooltip: "For insects or textures." },
            cam_tiltshift: { label: 'Tilt-Shift', description: 'Miniature effect.', tooltip: "Model look." },
            cam_rulethirds: { label: 'Rule of Thirds', description: 'Classic balanced composition.', tooltip: "Composition guide." },
            cam_dof: { label: 'Depth of Field', description: 'Control background blur (Bokeh).', tooltip: "Isolates the subject." },
            cam_dutch: { label: 'Dutch Angle', description: 'Tilted dramatic shot.', tooltip: "Creates unease or dynamism." },
            cam_oneshot: { label: 'One-Shot', description: 'Continuous movement impression.', tooltip: "Visual fluidity." },

            style_hyperreal: { label: 'Hyperrealistic', description: 'Extreme photographic rendering.', tooltip: "Like a photo." },
            style_surreal: { label: 'Surrealism', description: 'Dreamlike and incoherent style.', tooltip: "Dreamy and strange." },
            style_lowpoly: { label: 'Low Poly', description: 'Stylized 3D, few polygons.', tooltip: "Retro 3D game aesthetic." },
            style_vapor: { label: 'Vaporwave / Steampunk', description: 'Retro-futuristic.', tooltip: "Mix of styles." },
            style_8bit: { label: '8-bit Pixel Art', description: 'Retro video game graphics.', tooltip: "Nostalgia." },
            style_synth: { label: 'Synthwave', description: 'Neon and 80s aesthetic.', tooltip: "Vibrant colors." },
            style_cinematic: { label: 'Cinematic', description: 'Film quality, rich colors.', tooltip: "Cinema ambiance." },
            style_concept: { label: 'Concept Art', description: 'For game/film development.', tooltip: "Detailed sketch." },
            style_sketch: { label: 'Sketch', description: 'Line drawing.', tooltip: "Pencil or charcoal." },
            style_paint: { label: 'Painting', description: 'Classic pictorial style.', tooltip: "Oil or watercolor." },
            style_cyber: { label: 'Cyberpunk', description: 'Dark futuristic.', tooltip: "High tech, low life." },
            style_voxel: { label: 'Voxel Art', description: 'Volumetric pixels (cubes).', tooltip: "Minecraft style." },
            style_manga: { label: 'Manga / Comics', description: 'Comic book.', tooltip: "Black lines, flat colors." },
            style_arch: { label: 'Architecture', description: 'Clean lines, geometry.', tooltip: "Minimalism." },

            light_volumetric: { label: 'Volumetric Light', description: 'Visible rays.', tooltip: "God Rays." },
            light_rim: { label: 'Rim Lighting', description: 'Backlight outline.', tooltip: "Separates subject from background." },
            light_key: { label: 'Key Light', description: 'Main source.', tooltip: "Defines the mood." },
            light_fill: { label: 'Fill Light', description: 'Softens shadows.', tooltip: "Less contrast." },
            light_soft: { label: 'Soft Light', description: 'Diffuse shadows.', tooltip: "Studio style." },
            light_hard: { label: 'Hard Light', description: 'Sharp shadows.', tooltip: "Midday sun." },
            light_neon: { label: 'Neon', description: 'Urban night, bright colors.', tooltip: "Cyberpunk." },
            light_studio: { label: 'Studio', description: 'Controlled lighting.', tooltip: "Clean and sharp." },
            light_golden: { label: 'Golden Hour', description: 'Warm grazing light.', tooltip: "Sunset." },
            light_split: { label: 'Split Lighting', description: 'Dramatic side light.', tooltip: "Strong contrast." },
            light_lowkey: { label: 'Low-Key', description: 'Dark, mysterious.', tooltip: "Many shadows." },
            light_highkey: { label: 'High-Key', description: 'Bright, white.', tooltip: "Few shadows." },
            light_gel: { label: 'Gelled Light', description: 'Color filters.', tooltip: "Creative colors." },

            mat_pbr: { label: 'PBR', description: 'Realistic material simulation.', tooltip: "Physical Rendering." },
            mat_sss: { label: 'SSS', description: 'Subsurface scattering (skin, wax).', tooltip: "Organic realism." },
            mat_dispersion: { label: 'Dispersion', description: 'Color separation (prism).', tooltip: "Rainbow effect." },
            mat_specular: { label: 'Specular', description: 'Bright light points.', tooltip: "Smooth surfaces." },
            mat_fog: { label: 'Fog', description: 'Atmospheric density.', tooltip: "Depth." },
            mat_micro: { label: 'Micro-Details', description: 'Realistic imperfections.', tooltip: "Grain, dust." },
            mat_frosted: { label: 'Frosted Glass', description: 'Matte surface.', tooltip: "Translucent." },
            mat_glazed: { label: 'Glazed', description: 'Vitrified surface.', tooltip: "Shiny." },
            mat_organic: { label: 'Organic', description: 'Natural textures.', tooltip: "Wood, leather, moss." },

            post_ca: { label: 'Chrom. Aberration', description: 'Color fringes on edges.', tooltip: "Stylized optical defect." },
            post_vignette: { label: 'Vignette', description: 'Darkened edges.', tooltip: "Central focus." },
            post_grain: { label: 'Film Grain', description: 'Film texture.', tooltip: "Retro look." },
            post_flare: { label: 'Lens Flare', description: 'Lens reflection.', tooltip: "Intense light." },
            post_sepia: { label: 'Sepia', description: 'Aged filter.', tooltip: "Warm monochrome." },
            post_sharp: { label: 'Sharpened', description: 'Accentuates edges.', tooltip: "Clarity." },
            post_grading: { label: 'Color Grading', description: 'Color palette work.', tooltip: "Cinema mood." },

            tech_ar169: { label: '16:9', description: 'Cinema format.', tooltip: "Wide." },
            tech_ar32: { label: '3:2', description: 'Photo format.', tooltip: "Classic." },
            tech_chaos: { label: 'Chaos 80', description: 'High variation.', tooltip: "Unpredictable." },
            tech_iw: { label: 'Image Weight', description: 'Max image influence.', tooltip: "Requires an image." },
            tech_quality: { label: 'Quality 2', description: 'Slow and detailed render.', tooltip: "V5 only." },
            tech_stylize: { label: 'Stylize 750', description: 'Highly stylized.', tooltip: "Artistic." },
            tech_v6: { label: 'V 6.0', description: 'Latest version.', tooltip: "Realistic." },
            tech_seed: { label: 'Seed', description: 'Fixed seed (test).', tooltip: "Reproducibility." },
            tech_notext: { label: 'No Text', description: 'Exclude text.', tooltip: "Cleans image." },
            tech_noblur: { label: 'No Blur', description: 'Exclude blur.', tooltip: "Max sharpness." },
            tech_32bit: { label: '32-bit', description: 'Rich colors.', tooltip: "Color depth." },
            tech_vray: { label: 'V-Ray', description: 'Arch 3D engine.', tooltip: "Architecture." },
            tech_octane: { label: 'Octane', description: 'Organic 3D engine.', tooltip: "3D Art." },
            tech_ue5: { label: 'UE5', description: 'Next-gen game.', tooltip: "Real-time." },
        },
        landing: {
            heroTitle: 'Generate Perfect AI Prompts',
            heroSubtitle: 'Create stunning images with Midjourney, Stable Diffusion, and DALL-E 3. Our multi-engine builder guides you through complex styles and parameters for every AI.',
            ctaStart: 'Select Your AI Engine',
            features: {
                visualTitle: 'Intuitive Multi-Engine Builder',
                visualDesc: 'A unified interface to master Midjourney V6, Stable Diffusion XL, and DALL-E 3 without memorizing syntax.',
                techTitle: 'Technical Expertise',
                techDesc: 'From Stable Diffusion "Weights" to Midjourney "--stylize", use advanced options effortlessly.',
                optimizeTitle: 'Optimized & Updated',
                optimizeDesc: 'Enjoy the latest features: Negative Prompt for SD, Natural Language for DALL-E, V6 Parameters for MJ.'
            },
            seo: {
                title: 'A Universal Prompt Builder for Generative AI',
                p1: 'AI image creation requires specific vocabulary for each model. Our Universal Prompt Builder simplifies this process for Midjourney, Stable Diffusion, and DALL-E, turning your ideas into perfectly formatted commands.',
                subtitle1: 'Master Midjourney, Stable Diffusion, and DALL-E',
                p2: 'Every AI has its grammar: Midjourney prefers suffix parameters, Stable Diffusion excels with keywords and negative prompts, while DALL-E 3 demands descriptive sentences. Our tool automatically adapts your prompt structure.',
                subtitle2: 'Effortless Technical Optimization',
                p3: 'Stop wasting time checking syntax. Whether you need to adjust weights (::) or add complex negative prompts, our interface handles the complexity so you can focus on creativity.'
            },
            faq: {
                q1: 'Which AIs are supported?',
                a1: 'We currently support Midjourney V6 (and Niji), Stable Diffusion (XL & 1.5), and DALL-E 3. More engines coming soon.',
                q2: 'Is it free?',
                a2: 'Yes, the tool is 100% free. A "Premium" demo option exists to showcase advanced features.',
                q3: 'How does multi-engine generation work?',
                a3: 'Simply select your engine on the homepage. The interface automatically adapts to show only the relevant options and parameters for that AI.'
            }
        }
    }
};
