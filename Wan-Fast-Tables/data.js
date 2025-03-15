rawData = {
  "title": "Grids/wan-fast-2025-03-15-14-32-38",
  "description": "",
  "ext": "png",
  "min_width": 832,
  "min_height": 480,
  "defaults": {
    "show_descriptions": true,
    "autoscale": false,
    "sticky": false,
    "sticky_labels": true,
    "x": "sampler",
    "y": "scheduler",
    "x2": "none",
    "y2": "none"
  },
  "will_run": true,
  "metadata": null,
  "axes": [
    {
      "id": "sampler",
      "title": "Sampler",
      "description": "",
      "values": [
        {
          "key": "euler",
          "path": "euler",
          "title": "euler",
          "description": "",
          "show": true,
          "params": {
            "sampler": "euler"
          }
        },
        {
          "key": "euler_ancestral",
          "path": "euler_ancestral",
          "title": "euler_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "euler_ancestral"
          }
        }
      ]
    },
    {
      "id": "scheduler",
      "title": "Scheduler",
      "description": "",
      "values": [
        {
          "key": "simple",
          "path": "simple",
          "title": "simple",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "simple"
          }
        },
        {
          "key": "normal",
          "path": "normal",
          "title": "normal",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "normal"
          }
        },
        {
          "key": "sgm_uniform",
          "path": "sgm_uniform",
          "title": "sgm_uniform",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "sgm_uniform"
          }
        },
        {
          "key": "ddim_uniform",
          "path": "ddim_uniform",
          "title": "ddim_uniform",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "ddim_uniform"
          }
        },
        {
          "key": "beta",
          "path": "beta",
          "title": "beta",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "beta"
          }
        },
        {
          "key": "linear_quadrati",
          "path": "linear_quadrati",
          "title": "linear_quadratic",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "linear_quadratic"
          }
        }
      ]
    }
  ]
}