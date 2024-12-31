Module.register("MMM-Halloween", {
    defaults: {
        updateInterval: 1000 * 30, // Update every 30 seconds
        numberOfGhosts: 10, // Number of ghosts to display
        minSize: 100, // Minimum size of the ghosts
        maxSize: 400, // Maximum size of the ghosts
        opacity: 0.8, // Default opacity of the ghosts
        staticGif: "assets/images/jack.gif", // Path to the static GIF
        gifPosition: "top-right", // Options: "top-left", "top-right", "bottom-left", "bottom-right", "center"
        gifSize: 100, // Default size of the static GIF
        minSpeed: 15, // Minimum duration of the ghost animation in seconds
        maxSpeed: 25  // Maximum duration of the ghost animation in seconds
    },

    getStyles: function() {
        return ["MMM-Halloween.css"];
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
        wrapper.className = "halloween-wrapper";

        for (let i = 0; i < this.config.numberOfGhosts; i++) {
            const ghost = document.createElement("div");
            ghost.className = "ghost";

            const size = Math.random() * (this.config.maxSize - this.config.minSize) + this.config.minSize;
            ghost.style.width = `${size}px`;
            ghost.style.height = `${size}px`;

            const side = Math.floor(Math.random() * 4);
            let translateX, translateY;

            switch (side) {
                case 0: // From left
                    ghost.style.left = '-20%';
                    ghost.style.top = Math.random() * 100 + '%';
                    translateX = Math.random() * 200 + 100; // Move across the screen
                    translateY = Math.random() * 100 - 50;
                    break;
                case 1: // From right
                    ghost.style.left = '120%';
                    ghost.style.top = Math.random() * 100 + '%';
                    translateX = -(Math.random() * 200 + 100);
                    translateY = Math.random() * 100 - 50;
                    break;
                case 2: // From top
                    ghost.style.left = Math.random() * 100 + '%';
                    ghost.style.top = '-20%';
                    translateX = Math.random() * 100 - 50;
                    translateY = Math.random() * 200 + 100;
                    break;
                case 3: // From bottom
                    ghost.style.left = Math.random() * 100 + '%';
                    ghost.style.top = '120%';
                    translateX = Math.random() * 100 - 50;
                    translateY = -(Math.random() * 200 + 100);
                    break;
            }

            ghost.style.setProperty('--translateX', `${translateX}vw`);
            ghost.style.setProperty('--translateY', `${translateY}vh`);

            // Calculate duration based on minSpeed and maxSpeed
            const duration = Math.random() * (this.config.maxSpeed - this.config.minSpeed) + this.config.minSpeed;
            ghost.style.animationDuration = `${duration}s`;
            ghost.style.animationDelay = `${Math.random() * 5}s`; // Between 0 and 5 seconds
            ghost.style.opacity = this.config.opacity;

            wrapper.appendChild(ghost);
        }

        // Static GIF
        const staticGif = document.createElement("img");
        staticGif.src = this.file(this.config.staticGif);
        staticGif.className = `static-gif ${this.config.gifPosition}`;
        staticGif.style.width = `${this.config.gifSize}px`;
        staticGif.style.height = `${this.config.gifSize}px`;
        wrapper.appendChild(staticGif);

        return wrapper;
    },
});
