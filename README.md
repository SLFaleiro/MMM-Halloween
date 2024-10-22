MMM-Halloween
=============

MMM-Halloween is a Magic Mirror module that adds a spooky Halloween theme to your Magic Mirror display by animating ghosts across the screen. Customize the number of ghosts, their size, speed, and opacity to create the perfect Halloween atmosphere.

Features
--------

-   Display multiple animated ghosts floating across the screen.
-   Customize ghost appearance with adjustable size, speed, and opacity.
-   Add a static GIF (e.g., a jack-o'-lantern) to the display for extra ambiance.

Installation
------------

1.  Clone the Repository

    Navigate to your Magic Mirror's `modules` directory and clone this repository:

    bashCopy Code

    `cd ~/MagicMirror/modules
    git clone https://github.com/SLFaleiro/MMM-Halloween.git`

2.  Navigate to the Module Directory

    bashCopy Code

    `cd MMM-Halloween`

3.  Install Dependencies

    This module does not require any additional dependencies. Ensure your Magic Mirror is up to date.

4.  Add to Magic Mirror Configuration

    Open your `config.js` file in the Magic Mirror `config` directory and add the following configuration block:

   

    ```{
      module: "MMM-Halloween",
      position: "fullscreen_above",
      config: {
                numberOfGhosts: 10, // Number of ghosts to display on the screen. Adjust this to increase or decrease the number of ghosts.
                minSize: 100, // Minimum size (in pixels) of each ghost. This controls how small the smallest ghost can be.
                maxSize: 400, // Maximum size (in pixels) of each ghost. This controls how large the largest ghost can be.
                opacity: 0.35, // Opacity of the ghosts, ranging from 0 (completely transparent) to 1 (completely opaque). This makes the ghosts appear more or less transparent.
                staticGif: "assets/images/jack.gif", // Path to a static GIF file to display, such as a jack-o'-lantern. Ensure this path is correct relative to the module's directory.
                gifPosition: "bottom-left", // Position of the GIF on screen: "top-left", "top-right", "bottom-left", "bottom-right", "center", "top-center", "bottom-center", "left-center", "right-center"
                gifSize: 150 // Size (in pixels) of the static GIF. Adjust this to make the GIF larger or smaller on the screen.
      }
    }

Configuration Options
---------------------

-   numberOfGhosts: (integer) Number of ghosts to display on the screen.
-   minSize: (integer) Minimum size (in pixels) of the ghosts.
-   maxSize: (integer) Maximum size (in pixels) of the ghosts.
-   opacity: (float) Opacity of the ghosts (0 to 1).
-   staticGif: (string) Path to a static GIF to display, e.g., a jack-o'-lantern.
-   gifPosition: (string) Position of the static GIF on the screen (e.g., "bottom-left", "bottom-right").
-   gifSize: (integer) Size (in pixels) of the static GIF.

Usage
-----

Start your Magic Mirror to see the ghosts in action. They will randomly float across the screen according to the parameters you have set in the configuration.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

Support
-------

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository or contribute with a pull request.
