MMM-SeasonalEffects
===================

MMM-SeasonalEffects is an extensible MagicMirror module that brings dynamic particle effects and atmospheric visuals to your mirror display. Supporting leaves, snowflakes, bats, and ghosts, it features customizable spawn points, distinct physics animations (falling/swaying vs. floating), dynamic visual coloring via SVG stencils, and static ambient overlays.

<p align="center">
  <img src="https://github.com/jonellm/MMM-SeasonalEffects/main/screenshot.gif" alt="Halloween GIF">
</p>

Version
--------
**Current Version**: 2.0

Updates
--------

**Version 2.0**:
- Renamed from `MMM-Halloween` to `MMM-SeasonalEffects` to support year-round seasonal animations.
- Added support for multiple particle types (`leaf`, `snow`, `bat`, `ghost`).
- Added stencil-based dynamic color palette cycling (`particleColors`) using CSS mask styling.
- Implemented physics groups: top-spawning with sway/drift (`leaf`, `snow`) vs. 4-side screen floating (`bat`, `ghost`).
- Refactored rotation and drift controls via standard CSS variables.

Features
--------

- **Multi-Particle Support**: Animate falling autumn leaves, snow, floating bats, or haunting ghosts.
- **Dynamic Palette Coloring**: Apply dynamic color arrays to mask stencils (leaves/snow) or use native image colors (bats/ghosts).
- **Physics Engine**: Top-only spawning with organic leaf sway/fall animations alongside traditional multi-directional floating paths.
- **Configurable Dynamics**: Control size ranges, particle counts, animation speeds, opacity, and rotation angles.
- **Ambient Overlay**: Display fixed static images or GIFs (such as a jack-o'-lantern or holiday icon) in designated screen corners.

Installation
------------

1.  Clone the Repository

    Navigate to your Magic Mirror's `modules` directory and clone this repository:

     ```cd ~/MagicMirror/modules
    git clone https://github.com/jonellm/MMM-SeasonalEffects.git
2.  Navigate to the Module Directory

     ```
    cd MMM-SeasonalEffects
3.  Add to Magic Mirror Configuration

    Open your `config.js` file in the Magic Mirror `config` directory and add the following configuration block:
   

    ```
    {
      module: "MMM-SeasonalEffects",
      position: "fullscreen_above",
      config: {
                particleType: "leaf",
    			numberOfParticles: 10,
    			particleColors: ["#d97706", "#b45309", "#78350f", "#dc2626", "#eab308"],
    			minSize: 30,
    			maxSize: 150,
    			opacity: 0.8,
   				minSpeed: 15,
    			maxSpeed: 25,
    			minRotation: -30,
				maxRotation: 30,
				imageOffset: 0,
    			staticGif: "assets/images/jack.gif",
    			gifPosition: "bottom-left",
    			gifHeight: 100,
    			updateInterval: 1000 * 30
      	}
    }

Configuration Options
---------------------

-   numberOfParticles: (integer) Number of items to display on the screen.
-	particleTyle: (string) Type of particle effect: "Leaf", "ghost", "bat"
-	particleColors: (array) Array of CSS color hex codes for stencil particles. If empty, default of clean white will be used (#ffffff)
-   minSize: (integer) Minimum size (in pixels) of the ghosts.
-   maxSize: (integer) Maximum size (in pixels) of the ghosts.
-   opacity: (float) Opacity of the ghosts (0 to 1).
-   staticGif: (string) Path to a static GIF to display, e.g., a jack-o'-lantern.
-   gifPosition: (string) Position of the static GIF on the screen (e.g., ""top-left", "top-right", "bottom-left", "bottom-right", "center", "top-center", "bottom-center", "left-center", "right-center"").
-   gifHeight: (integer) Height (in pixels) of the static GIF. Native aspect ratio is maintained.
-   minSpeed: (integer) Minimum speed (in seconds) for the particles to complete their animation across the screen.
-   maxSpeed: (integer) Maximum speed (in seconds) for the particles to complete their animation across the screen.


Updating the Plugin
-----

To update the MMM-SeasonalEffects module to the latest version, navigate to the module's directory and pull the latest changes from the repository:

    cd ~/MagicMirror/modules/MMM-SeasonalEffects
    git pull


Usage
-----

Start your Magic Mirror to see the effects in action. They will randomly float across the screen according to the parameters you have set in the configuration.

License
-------

This project is licensed under the GNU General Public License v2.0. You are free to use, modify, and distribute this software under the terms of the GPL. See the LICENSE file for details.

Support
-------

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository or contribute with a pull request.
