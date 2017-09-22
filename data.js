var APP_DATA = {
  "scenes": [
    {
      "id": "0-out",
      "name": "Out",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.911733545920315,
        "pitch": -0.17503445998979927,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0371680761330095,
          "pitch": 0.20793551802653276,
          "rotation": 6.283185307179586,
          "target": "1-in"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-in",
      "name": "In",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.466626241712234,
        "pitch": 0.22603849505610185,
        "fov": 1.357554015354463
      },
      "linkHotspots": [
        {
          "yaw": -1.6033603953765283,
          "pitch": 0.024851657007099348,
          "rotation": 3.141592653589793,
          "target": "0-out"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
