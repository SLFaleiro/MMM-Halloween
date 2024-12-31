MMM-Halloween
=============

MMM-Halloween is a Magic Mirror module that adds a spooky Halloween theme to your Magic Mirror display by animating ghosts across the screen. Customize the number of ghosts, their size, speed, and opacity to create the perfect Halloween atmosphere.

<p align="center">
  <img src="https://raw.githubusercontent.com/SLFaleiro/MMM-Halloween/main/screenshot.gif" alt="Halloween GIF">
</p>

Version
--------
**Current Version**: 1.2

Updates
--------

Version 1.2**: Added configurable minimum and maximum speed settings for ghost animations.

Features
--------

-   Display multiple animated ghosts floating across the screen.
-   Customize ghost appearance with adjustable size, speed, and opacity.
-   Control ghost speed with configurable minimum and maximum speed settings.
-   Add a static GIF (e.g., a jack-o'-lantern) to the display for extra ambiance.

Installation
------------

1.  Clone the Repository

    Navigate to your Magic Mirror's `modules` directory and clone this repository:

     ```cd ~/MagicMirror/modules
    git clone https://github.com/SLFaleiro/MMM-Halloween.git
2.  Navigate to the Module Directory

     ```
    cd MMM-Halloween
3.  Add to Magic Mirror Configuration

    Open your `config.js` file in the Magic Mirror `config` directory and add the following configuration block:
   

    ```
    {
      module: "MMM-Halloween",
      position: "fullscreen_above",
      config: {
                numberOfGhosts: 10,
                updateInterval: 1000 * 99999,
                minSize: 100,
                maxSize: 400,
                opacity: 0.35,
                staticGif: "assets/images/jack.gif",
                gifPosition: "bottom-left",
                gifSize: 150,
                minSpeed: 15,
                maxSpeed: 25
      }
    }

Configuration Options
---------------------

-   numberOfGhosts: (integer) Number of ghosts to display on the screen.
-   minSize: (integer) Minimum size (in pixels) of the ghosts.
-   maxSize: (integer) Maximum size (in pixels) of the ghosts.
-   opacity: (float) Opacity of the ghosts (0 to 1).
-   staticGif: (string) Path to a static GIF to display, e.g., a jack-o'-lantern.
-   gifPosition: (string) Position of the static GIF on the screen (e.g., ""top-left", "top-right", "bottom-left", "bottom-right", "center", "top-center", "bottom-center", "left-center", "right-center"").
-   gifSize: (integer) Size (in pixels) of the static GIF.
-   minSpeed: (integer) Minimum speed (in seconds) for the ghosts to complete their animation across the screen.
-   maxSpeed: (integer) Maximum speed (in seconds) for the ghosts to complete their animation across the screen.


Updating the Plugin
-----

To update the MMM-Halloween module to the latest version, navigate to the module's directory and pull the latest changes from the repository:

    cd ~/MagicMirror/modules/MMM-Halloween
    git pull


Usage
-----

Start your Magic Mirror to see the ghosts in action. They will randomly float across the screen according to the parameters you have set in the configuration.

License
-------

This project is licensed under the GNU General Public License v2.0. You are free to use, modify, and distribute this software under the terms of the GPL. See the LICENSE file for details.

Support
-------

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository or contribute with a pull request.
