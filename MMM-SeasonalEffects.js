Module.register("MMM-SeasonalEffects", {
    defaults: {
        updateInterval: 1000 * 30, // Update every 30 seconds
        numberOfParticles: 10, // Number of individual entities to display
        minSize: 30, // Minimum size of the particles
        maxSize: 400, // Maximum size of the particles - this is big, shrink in config if desired
        opacity: 0.8, // Default opacity of the Entities
        staticGif: "assets/images/jack.gif", // Path to the static GIF
        gifPosition: "top-right", // Options: "top-left", "top-right", "bottom-left", "bottom-right", "center"
        gifHeight: 100, // Default size of the static GIF
        minSpeed: 15, // Minimum duration of the particle animation in seconds
        maxSpeed: 25,  // Maximum duration of the particle animation in seconds
		minRotation: -30,    // Minimum random initial tilt (degrees)
		maxRotation: 30,     // Maximum random initial tilt (degrees)
		imageOffset: 0,     // Static offset correction for your asset's default angle (degrees)

		// Adding leaves
		particleType: "bat", // options include "leaf", "bat", "ghost"
		particleColors: [] // none.  If added in user config, it'll cycle through
		// particleColors: ["#d97706", "#b45309", "#78350f", "#dc2626", "#eab308"] // Autumn colors

    },

    getStyles: function() {
        return ["MMM-SeasonalEffects.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        this.scheduleUpdate();
    },

    scheduleUpdate: function() {
        setInterval(() => {
            this.updateDom();
        }, this.config.updateInterval);
    },

    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.className = "seasonal-wrapper";

        for (let i = 0; i < this.config.numberOfParticles; i++) {
            const particle = document.createElement("div");
			// Extensible class naming
			particle.className = `particle ${this.config.particleType}`;
            // particle.className = "particle";

            const size = Math.random() * (this.config.maxSize - this.config.minSize) + this.config.minSize;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

			// Only apply dynamic color if the user configured a color array
			if (this.config.particleColors && this.config.particleColors.length > 0) {
    			const randomColor = this.config.particleColors[Math.floor(Math.random() * 	this.config.particleColors.length)];
    			particle.style.setProperty('--particle-color', randomColor);
			}			

            let side = Math.floor(Math.random() * 4);

			// Force top-only spawning for leaves and ghosts
			if (this.config.particleType === "leaf" || this.config.particleType === "snow") {
    			side = 2; 
			}

            let translateX, translateY;

            switch (side) {
                case 0: // From left
                    particle.style.left = '-20%';
                    particle.style.top = Math.random() * 100 + '%';
                    translateX = Math.random() * 200 + 100; // Move across the screen
                    translateY = Math.random() * 100 - 50;
                    break;
                case 1: // From right
                    particle.style.left = '120%';
                    particle.style.top = Math.random() * 100 + '%';
                    translateX = -(Math.random() * 200 + 100);
                    translateY = Math.random() * 100 - 50;
                    break;
                case 2: // From top
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = '-20%';
                    translateX = Math.random() * 100 - 50;
                    translateY = Math.random() * 200 + 100;
                    break;
                case 3: // From bottom
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = '120%';
                    translateX = Math.random() * 100 - 50;
                    translateY = -(Math.random() * 200 + 100);
                    break;
            }

            particle.style.setProperty('--translateX', `${translateX}vw`);
            particle.style.setProperty('--translateY', `${translateY}vh`);

	    // Calculate random rotation within your config range + your static offset
            const randomRotation = Math.random() * (this.config.maxRotation - this.config.minRotation) + this.config.minRotation;
            const totalRotation = randomRotation + this.config.imageOffset;
		
	    // Pass the rotation as a CSS variable instead of overwriting transform
            particle.style.setProperty('--rotation', `${totalRotation}deg`);

            // Calculate duration based on minSpeed and maxSpeed
            const duration = Math.random() * (this.config.maxSpeed - this.config.minSpeed) + this.config.minSpeed;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`; // Between 0 and 5 seconds
            particle.style.opacity = this.config.opacity;

            wrapper.appendChild(particle);
        }

        // Static GIF
        const staticGif = document.createElement("img");
        staticGif.src = this.file(this.config.staticGif);
        staticGif.className = `static-gif ${this.config.gifPosition}`;
        staticGif.style.height = `${this.config.gifHeight}px`;
		// Do not set staticGif.style.height to maintain aspect ratio of image
        wrapper.appendChild(staticGif);

        return wrapper;
    },
});
