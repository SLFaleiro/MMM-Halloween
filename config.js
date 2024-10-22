let config = {
    address: "0.0.0.0",     
    port: 8080,
    basePath: "/",  
    ipWhitelist: [],        
    useHttps: false,              
    httpsPrivateKey: "",    
    httpsCertificate: "",   
    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"], 
    timeFormat: 24,
    units: "metric",
    serverOnly:  true,
    modules: [
            {
                    module: "alert",
            },
            {
                    module: "updatenotification",
                    position: "top_bar"
            },
            {
                    module: "clock",
                    position: "top_right"
            },
          
            {
                    module: "calendar",
                    header: "UK Holidays",
                    position: "top_left",
                    config: {
                            calendars: [
                                    {
                                            symbol: "calendar-check",
                                            url: "https://www.gov.uk/bank-holidays/england-and-wales.ics"
                                    }
                            ]
                    }
            },

            

            {
                module: "SimpleCalendar",
                position: "upper_third", // Choose the position that works for you
                config: {
                    iCalURLs: [
                        "https://calendar.google.com/calendar/ical/shawnlfaleiro%40gmail.com/private-2f417b243c92bdabc45c68d15fb354df/basic.ics",
                        "https://calendar.google.com/calendar/ical/blazyfernandez%40gmail.com/private-328a76cefd8c8815e4308929ac537d17/basic.ics"
                    ],
                    updateInterval: 5 * 60 * 1000, // Fetch every 5 minutes
                    daysToShow: 30, // Number of days to show
                    startFromYesterday: true, // Start the calendar from yesterday
                    currentDayHighlightColor: "rgba(255, 255, 0, 0.5)" // Default highlight color
                }
            },

        {
                
                        module: "MMM-TflBusTimes",
                        position: "bottom_right", // Choose the desired position
                        config: {
                            stopId: '490008126EB',
                            stopName: 'Hibernia Road - SU', // The name of the bus stop
                            updateInterval: 60000, // 1 minute
                            fontSize: '19px' // Font size for the display
                        }
                
                    
            },




            /*
            {
                    module: "compliments",
                    position: "lower_third"
            },
            */
            /*
            {
                    module: "weather",
                    position: "top_right",
                    header: "Weather Forecast",
                    config: {
                            weatherProvider: "openweathermap",
                            type: "forecast",
                            location: "Hounslow",
                            locationID: "2646517", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                            apiKey: "39f162b43bc16042ac714142fefefb35"
                    }
            },

            */
            {
                    module: "newsfeed",
                    position: "bottom_bar",
                    config: {
                            feeds: [
                                    {
                                            title: "News",
                                            url: "https://rss.faleiro.uk/i/?a=rss&rid=64b68610e3005&state=3&hours=168"
                                    }
                            ],
                            showSourceTitle: true,
                            showPublishDate: true,
                            broadcastNewsFeeds: true,
                            broadcastNewsUpdates: true,
                            showSourceTitle:true,
                            showDescription:true,
                            
                    }
            },


            {
                module: 'MMM-SmoothWallpaper',
                position: 'fullscreen_below',
                config: {
                  updateInterval: 30000, // Change image every 30 seconds
                  fadeSpeed: 2000,       // Fade transition speed in milliseconds
                  sortOrder: 'newToOld'  // Options: 'nameAsc', 'nameDesc', 'oldToNew', 'newToOld'
                }
              }
              
              
              
              ,
              


            /*
            {
                module: "MMM-Wallpaper",
                position: "fullscreen_below",
                config: { // See "Configuration options" for more information.
                  source: "local: /opt/magicmirror/modules/MMM-Wallpaper/images",
                  slideInterval: 10 * 1000, // Change slides every minute
                  fadeEdges:true,
                  caption:false,
                  crossfade:true,
                  shuffle:true,
                }
        },

        */
 /*
        {
                module: "weather",
                position: "bottom",
                config: {
                        weatherProvider: "openweathermap",
                        type: "daily",
                        location: "Hounslow",
                        locationID: "2646517", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                        apiKey: "39f162b43bc16042ac714142fefefb35"
                }
        },
 */
 
        {
                module: "weatherforecast",
                position: "bottom_bar", // This can be adjusted as needed
                config: {
                    apiKey: "39f162b43bc16042ac714142fefefb35",
                    location: "Hounslow",
                    locationID: "2646517",
                    units: "metric",
                    forecastDays: 5, // Number of forecast days to display
                }
            }

            
            
            
            
            
            
            
            
            
        

            /*
        {
                module: "MMM-TrainServices",
                position: "bottom_right", // Choose the position you prefer
                config: {
                    updateInterval: 60000, // Update every 1 minute
                    apiUrl: 'https://api.rtt.io/api/v1/json/search/HAY/to/PAD',
                    username: 'rttapi_shawnlfaleiro',
                    password: 'e2446ed9bbb464897516d9fcb5c44a1a8da6ecc6',
                    maxRows: 4,
                    maxWidth: '300px', // Set your desired max width here
                    tableTitle: 'Train Services'
                }
                    
            }
            
            */
            
            

         

            
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
